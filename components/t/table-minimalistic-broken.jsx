import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/keqt0zbld.css';
import '../../css/j/j41kocbsj.css';
import '../../css/k/kz8j27a0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="keqt0zbld"/><path class="j41kocbsj"/><path class="kz8j27a0y"/></g>`,
		"fallback": "solar:table-minimalistic-broken",
	});
}

export default Component;
