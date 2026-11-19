import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkt4rab8d.css';
import '../../css/f/fone2ritx.css';
import '../../css/s/smtgem5pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkt4rab8d"/><path class="fone2ritx"/><path class="smtgem5pu"/></g>`,
		"fallback": "andrsrxn:warehouse-snow",
	});
}

export default Component;
