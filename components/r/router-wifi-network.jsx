import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heeff90lm.css';
import '../../css/m/mw765bcee.css';
import '../../css/n/n25vhacmq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="heeff90lm"/><path class="mw765bcee"/><path class="n25vhacmq"/></g>`,
		"fallback": "streamline-flex-color:router-wifi-network",
	});
}

export default Component;
