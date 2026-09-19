import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mrli8m4nv.css';
import '../../css/b/bly0oihkk.css';
import '../../css/v/v88mtsb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="mrli8m4nv"/><path class="bly0oihkk"/><path class="v88mtsb4v"/></g>`,
		"fallback": "hugeicons:lasso",
	});
}

export default Component;
