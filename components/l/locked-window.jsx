import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k4102cbdn.css';
import '../../css/a/asj-csbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k4102cbdn"/><path class="asj-csbpl"/></g>`,
		"fallback": "iconoir:locked-window",
	});
}

export default Component;
