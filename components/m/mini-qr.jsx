import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0urbzbly.css';
import '../../css/y/y_s6t7b8x.css';
import '../../css/u/u11od-bgv.css';
import '../../css/f/fzy27luea.css';
import '../../css/c/cq9nz01qo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0urbzbly"/><path class="y_s6t7b8x"/><path class="u11od-bgv"/><path class="fzy27luea"/><path class="cq9nz01qo"/>`,
		"fallback": "selfhst:mini-qr",
	});
}

export default Component;
