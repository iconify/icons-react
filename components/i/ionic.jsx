import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfnlz1bwm.css';
import '../../css/y/yvav3etyo.css';
import '../../css/k/kx7lj1yvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jfnlz1bwm"><path class="yvav3etyo"/><circle class="kx7lj1yvv"/></g>`,
		"fallback": "material-icon-theme:ionic",
	});
}

export default Component;
