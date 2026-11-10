import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/poj-12pcl.css';
import '../../css/m/meyh7pb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="poj-12pcl"/><path class="meyh7pb5y"/></g>`,
		"fallback": "andrsrxn:table-rows-plus",
	});
}

export default Component;
