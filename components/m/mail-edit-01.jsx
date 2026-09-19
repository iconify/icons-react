import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gdpq22bzn.css';
import '../../css/n/ny81u6b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="gdpq22bzn"/><path class="ny81u6b2y"/></g>`,
		"fallback": "hugeicons:mail-edit-01",
	});
}

export default Component;
