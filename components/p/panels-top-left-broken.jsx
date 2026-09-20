import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g626xxb-k.css';
import '../../css/q/qlcb99brl.css';
import '../../css/e/e6bz15b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g626xxb-k"/><path class="qlcb99brl"/><path class="e6bz15b5n"/></g>`,
		"fallback": "solar:panels-top-left-broken",
	});
}

export default Component;
