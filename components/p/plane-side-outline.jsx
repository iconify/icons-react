import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/log763box.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="log763box"/>`,
		"fallback": "glyphs:plane-side-outline",
	});
}

export default Component;
