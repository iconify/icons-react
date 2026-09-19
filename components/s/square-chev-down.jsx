import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o76egzb2i.css';
import '../../css/p/pu-6-0j8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o76egzb2i"/><path class="pu-6-0j8d"/>`,
		"fallback": "circum:square-chev-down",
	});
}

export default Component;
