import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/slsmjmp_v.css';
import '../../css/d/dk5n0xbnd.css';
import '../../css/u/u8blqph1y.css';
import '../../css/f/foful22qz.css';
import '../../css/r/rk8axabng.css';
import '../../css/s/sxq_sn1eh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="slsmjmp_v wm-shadow"/><path class="dk5n0xbnd wm-shadow"/><path class="u8blqph1y"/><path class="foful22qz"/><path class="rk8axabng"/><path class="sxq_sn1eh"/></g>`,
		"fallback": "withicons-brutal:red-lantern",
	});
}

export default Component;
