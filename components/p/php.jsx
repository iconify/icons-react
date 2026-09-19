import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khujr0b4x.css';
import '../../css/f/ftul8fzmf.css';
import '../../css/h/hskv4ujal.css';
import '../../css/y/yjav2-0xb.css';
import '../../css/a/ack4zqpxr.css';
import '../../css/s/sd-8ro1cb.css';
import '../../css/x/x7s4w47qw.css';
import '../../css/t/twfqatbdp.css';
import '../../css/u/u7horvb2q.css';
import '../../css/x/xeup9ccyz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path fill="url(#SVGC9rnueOH)" class="khujr0b4x"/><path class="ftul8fzmf"/><path class="hskv4ujal"/><path class="yjav2-0xb"/><path class="ack4zqpxr"/><path class="sd-8ro1cb"/><path class="x7s4w47qw"/><path class="twfqatbdp"/><defs><radialGradient id="SVGC9rnueOH" cx="0" cy="0" r="1" gradientTransform="translate(38.426 42.169)scale(84.04136)" gradientUnits="userSpaceOnUse"><stop class="u7horvb2q"/><stop offset=".3" class="u7horvb2q"/><stop offset=".75" class="xeup9ccyz"/><stop offset="1" class="xeup9ccyz"/></radialGradient></defs>`,
		"fallback": "devicon:php",
	});
}

export default Component;
