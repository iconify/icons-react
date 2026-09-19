import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1zgeubyj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x1zgeubyj"/>`,
		"fallback": "glyphs:note-bold",
	});
}

export default Component;
