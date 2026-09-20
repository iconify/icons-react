import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lk387obkc.css';
import '../../css/p/pek1alrpa.css';
import '../../css/w/w85uyrb9b.css';
import '../../css/r/r5_bl8ihy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lk387obkc"/><path class="pek1alrpa"/><path class="w85uyrb9b"/><path class="r5_bl8ihy"/></g>`,
		"fallback": "solar:running-2-linear",
	});
}

export default Component;
