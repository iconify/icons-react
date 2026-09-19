import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xsno7eowa.css';
import '../../css/t/t_jihkqyx.css';
import '../../css/a/au0fx3bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xsno7eowa"/><path class="t_jihkqyx"/><path class="au0fx3bwe"/></g>`,
		"fallback": "hugeicons:radioactive-alert",
	});
}

export default Component;
