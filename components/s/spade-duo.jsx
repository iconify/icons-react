import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f83i5e07h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f83i5e07h"/>`,
		"fallback": "glyphs:spade-duo",
	});
}

export default Component;
