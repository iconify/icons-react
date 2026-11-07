import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gy5n-26px.css';
import '../../css/i/iyh26i1-m.css';
import '../../css/g/g6zbtldbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gy5n-26px"/><path class="iyh26i1-m"/><circle class="g6zbtldbm"/></g>`,
		"fallback": "solar:smartphone-2-line-duotone",
	});
}

export default Component;
