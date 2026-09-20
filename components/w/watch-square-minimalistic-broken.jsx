import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l3yrwhb1k.css';
import '../../css/v/vs49djbdr.css';
import '../../css/k/k8gt8ib7o.css';
import '../../css/e/emcs_sbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l3yrwhb1k"/><path class="vs49djbdr"/><path class="k8gt8ib7o"/><path class="emcs_sbus"/></g>`,
		"fallback": "solar:watch-square-minimalistic-broken",
	});
}

export default Component;
