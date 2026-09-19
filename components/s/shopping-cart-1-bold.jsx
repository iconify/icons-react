import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2n266bru.css';
import '../../css/m/m1tji20nr.css';
import '../../css/q/qhg7eq7ou.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2n266bru"/><path class="m1tji20nr"/><path class="qhg7eq7ou"/></g>`,
		"fallback": "glyphs:shopping-cart-1-bold",
	});
}

export default Component;
