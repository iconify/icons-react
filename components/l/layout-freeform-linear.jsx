import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecr98fbsm.css';
import '../../css/u/u-r142amt.css';
import '../../css/y/yyzjhcc7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ecr98fbsm"/><path class="u-r142amt"/><path class="yyzjhcc7t"/></g>`,
		"fallback": "solar:layout-freeform-linear",
	});
}

export default Component;
