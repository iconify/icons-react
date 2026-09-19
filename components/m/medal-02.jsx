import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ot6cujwjc.css';
import '../../css/n/nhobi37bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ot6cujwjc"/><path class="nhobi37bw"/></g>`,
		"fallback": "hugeicons:medal-02",
	});
}

export default Component;
