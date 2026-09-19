import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ypg9ubb4y.css';
import '../../css/n/nayrnoa4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ypg9ubb4y"/><path class="nayrnoa4z"/></g>`,
		"fallback": "hugeicons:left-to-right-block-quote",
	});
}

export default Component;
