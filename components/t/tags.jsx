import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nwgdq5bka.css';
import '../../css/l/l8395c28f.css';
import '../../css/n/nvb3dunuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nwgdq5bka"/><path class="l8395c28f"/><path class="nvb3dunuj"/></g>`,
		"fallback": "hugeicons:tags",
	});
}

export default Component;
