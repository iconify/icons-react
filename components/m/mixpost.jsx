import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5kt4xr8s.css';
import '../../css/u/u_8a0r-bt.css';
import '../../css/z/zg70rbcur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5kt4xr8s"/><path class="u_8a0r-bt"/><path class="zg70rbcur"/>`,
		"fallback": "selfhst:mixpost",
	});
}

export default Component;
