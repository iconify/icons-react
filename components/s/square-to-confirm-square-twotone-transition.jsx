import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/y/y591zt.css';
import '../../css/k/kofr8g.css';
import '../../css/f/fill-from-0.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew y591zt"/><path class="iw1iew kofr8g"/>`,
		"fallback": "line-md:square-to-confirm-square-twotone-transition",
	});
}

export default Component;
