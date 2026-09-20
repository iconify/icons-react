import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b06rkq0uc.css';
import '../../css/w/we3115bsg.css';
import '../../css/w/w4_i_ibjh.css';
import '../../css/u/uzb0msblh.css';
import '../../css/d/dq77omg0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b06rkq0uc"/><path class="we3115bsg"/><path class="w4_i_ibjh"/><path class="uzb0msblh"/><path class="dq77omg0v"/></g>`,
		"fallback": "streamline-ultimate-color:phone-actions-merge",
	});
}

export default Component;
