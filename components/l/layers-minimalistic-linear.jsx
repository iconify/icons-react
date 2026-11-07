import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bb8l5mttt.css';
import '../../css/x/xgvf4qxdo.css';
import '../../css/w/wpvidkbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bb8l5mttt"/><path class="xgvf4qxdo"/><path class="wpvidkbld"/></g>`,
		"fallback": "solar:layers-minimalistic-linear",
	});
}

export default Component;
