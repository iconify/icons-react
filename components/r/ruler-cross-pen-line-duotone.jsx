import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/phsmk7b-g.css';
import '../../css/n/n-_-ghbzs.css';
import '../../css/p/ph4irppsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="phsmk7b-g"/><path class="n-_-ghbzs"/><path class="ph4irppsi"/></g>`,
		"fallback": "solar:ruler-cross-pen-line-duotone",
	});
}

export default Component;
