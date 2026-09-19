import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pkcl39bet.css';
import '../../css/t/toat3bbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pkcl39bet"/><path class="toat3bbao"/></g>`,
		"fallback": "hugeicons:text-check",
	});
}

export default Component;
