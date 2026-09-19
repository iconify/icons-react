import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd_xlpb0y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fd_xlpb0y"/>`,
		"fallback": "glyphs:peace-outline",
	});
}

export default Component;
