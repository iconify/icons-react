import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd64tibsq.css';
import '../../css/c/ci44k96kx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dd64tibsq"/><path class="ci44k96kx"/></g>`,
		"fallback": "glyphs-poly:monitor",
	});
}

export default Component;
