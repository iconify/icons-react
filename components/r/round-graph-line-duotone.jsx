import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kj9125bhw.css';
import '../../css/u/ubsyz0bji.css';
import '../../css/a/a09g2ehcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kj9125bhw"/><path class="ubsyz0bji"/><path class="a09g2ehcd"/></g>`,
		"fallback": "solar:round-graph-line-duotone",
	});
}

export default Component;
