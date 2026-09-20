import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vxsrppbzg.css';
import '../../css/g/gz7seyb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vxsrppbzg"/><path class="gz7seyb7t"/></g>`,
		"fallback": "solar:pin-line-duotone",
	});
}

export default Component;
