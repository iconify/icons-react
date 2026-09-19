import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aosi0f7oi.css';
import '../../css/e/enzjmbbaw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aosi0f7oi"/><path class="enzjmbbaw"/></g>`,
		"fallback": "glyphs:pin-1-duo",
	});
}

export default Component;
