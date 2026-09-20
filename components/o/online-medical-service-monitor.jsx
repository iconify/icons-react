import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2qkucbjv.css';
import '../../css/d/dio7oi7tx.css';
import '../../css/j/j6sw44bfr.css';
import '../../css/w/wbnrjyrfw.css';
import '../../css/m/m4t7yvbfs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2qkucbjv"/><path class="dio7oi7tx"/><path class="j6sw44bfr"/><path class="wbnrjyrfw"/><path class="m4t7yvbfs"/></g>`,
		"fallback": "streamline-color:online-medical-service-monitor",
	});
}

export default Component;
