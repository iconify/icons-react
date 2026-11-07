import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o87xgabpe.css';
import '../../css/n/ntddo3b1d.css';
import '../../css/k/k70ayubab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o87xgabpe"/><path class="ntddo3b1d"/><path class="k70ayubab"/></g>`,
		"fallback": "solar:medal-star-square-linear",
	});
}

export default Component;
