import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bnn6dbcbc.css';
import '../../css/m/m6hvbi_wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bnn6dbcbc"/><path class="m6hvbi_wp"/></g>`,
		"fallback": "solar:panel-left-linear",
	});
}

export default Component;
