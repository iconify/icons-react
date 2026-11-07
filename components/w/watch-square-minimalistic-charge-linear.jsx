import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g9v60on3f.css';
import '../../css/h/h1j1qf-3w.css';
import '../../css/v/vs49djbdr.css';
import '../../css/k/k8gt8ib7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g9v60on3f"/><path class="h1j1qf-3w"/><path class="vs49djbdr"/><path class="k8gt8ib7o"/></g>`,
		"fallback": "solar:watch-square-minimalistic-charge-linear",
	});
}

export default Component;
