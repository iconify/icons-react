import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wjjmiygmi.css';
import '../../css/o/o2dicyb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wjjmiygmi"/><path class="o2dicyb5f"/></g>`,
		"fallback": "hugeicons:solar-energy",
	});
}

export default Component;
