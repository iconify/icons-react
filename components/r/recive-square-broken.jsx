import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ho3sencic.css';
import '../../css/c/ckz33_l6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ho3sencic"/><path class="ckz33_l6d"/></g>`,
		"fallback": "solar:recive-square-broken",
	});
}

export default Component;
