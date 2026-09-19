import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/v_482lbna.css';
import '../../css/h/h9ygnpbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="v_482lbna"/><path class="h9ygnpbko"/></g>`,
		"fallback": "hugeicons:ticket-02",
	});
}

export default Component;
