import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slucgwbym.css';
import '../../css/v/vld0sn98e.css';
import '../../css/i/iuk-_6mjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse transform="rotate(105 12 10.83)" class="slucgwbym"/><path class="vld0sn98e"/><path class="iuk-_6mjr"/></g>`,
		"fallback": "andrsrxn:lasso",
	});
}

export default Component;
