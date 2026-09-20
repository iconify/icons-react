import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c4zuntmrz.css';
import '../../css/v/vy1sywbek.css';
import '../../css/l/ltwq23bbr.css';
import '../../css/z/z4exszsav.css';
import '../../css/f/fbnn_3bad.css';
import '../../css/g/gvyc-o7fz.css';
import '../../css/r/rgnmckb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c4zuntmrz"/><path class="vy1sywbek"/><path class="ltwq23bbr"/><path class="z4exszsav"/><path class="fbnn_3bad"/><circle class="gvyc-o7fz"/><path class="rgnmckb3y"/></g>`,
		"fallback": "solar:playlist-minimalistic-2-linear",
	});
}

export default Component;
