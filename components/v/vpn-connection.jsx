import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0wkzbb8d.css';
import '../../css/n/nf-lt59yy.css';
import '../../css/v/vpbv2k_eh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n0wkzbb8d"/><path class="nf-lt59yy"/><path class="vpbv2k_eh"/></g>`,
		"fallback": "streamline-color:vpn-connection",
	});
}

export default Component;
