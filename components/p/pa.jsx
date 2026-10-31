import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l88qm1qag.css';
import '../../css/d/drav6dvkt.css';
import '../../css/v/vu4glqw6p.css';
import '../../css/y/yhds7sbse.css';
import '../../css/v/vs0n0gheb.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l88qm1qag"/><path class="drav6dvkt"/><path class="vu4glqw6p"/><path class="yhds7sbse"/><path class="vs0n0gheb"/></g>`,
		"fallback": "cif:pa",
	});
}

export default Component;
