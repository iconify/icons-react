import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wunt_8h3k.css';
import '../../css/d/dvuot18qs.css';
import '../../css/v/vyekqrbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wunt_8h3k"/><rect class="dvuot18qs"/><path class="vyekqrbhl"/></g>`,
		"fallback": "andrsrxn:text-centerline-start",
	});
}

export default Component;
