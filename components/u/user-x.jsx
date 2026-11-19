import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmr0x_b2r.css';
import '../../css/g/g0m24_bsq.css';
import '../../css/f/fv73eabak.css';
import '../../css/x/x9g6iubus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmr0x_b2r"/><path class="g0m24_bsq"/><path class="fv73eabak"/><path class="x9g6iubus"/></g>`,
		"fallback": "andrsrxn:user-x",
	});
}

export default Component;
