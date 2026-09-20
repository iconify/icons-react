import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/enq2l8p_m.css';
import '../../css/o/o9q3skbhp.css';
import '../../css/p/ppm1aachj.css';
import '../../css/u/uk5pr39zp.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="enq2l8p_m"/><path class="o9q3skbhp"/><path class="ppm1aachj"/><path class="uk5pr39zp"/></g>`,
		"fallback": "system-uicons:server",
	});
}

export default Component;
