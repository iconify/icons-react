import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/poj-12pcl.css';
import '../../css/n/n1lp_9b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="poj-12pcl"/><path class="n1lp_9b7t"/></g>`,
		"fallback": "andrsrxn:table-columns-plus",
	});
}

export default Component;
