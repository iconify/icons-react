import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e50ycdctt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e50ycdctt"/>`,
		"fallback": "glyphs:virus-bold",
	});
}

export default Component;
