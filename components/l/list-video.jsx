import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/w-p_xv_8i.css';
import '../../css/m/mil_i2bdv.css';
import '../../css/p/p3_p_xvwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="w-p_xv_8i"/><path class="mil_i2bdv"/><path class="p3_p_xvwi"/></g>`,
		"fallback": "hugeicons:list-video",
	});
}

export default Component;
