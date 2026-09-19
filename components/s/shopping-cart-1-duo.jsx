import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu8u88uvq.css';
import '../../css/f/fac710bhp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iu8u88uvq"/><path class="fac710bhp"/></g>`,
		"fallback": "glyphs:shopping-cart-1-duo",
	});
}

export default Component;
