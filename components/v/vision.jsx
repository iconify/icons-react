import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g0ppmrbfd.css';
import '../../css/u/u234q1bua.css';
import '../../css/m/miaafxb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g0ppmrbfd"/><path class="u234q1bua"/><path class="miaafxb_l"/></g>`,
		"fallback": "hugeicons:vision",
	});
}

export default Component;
