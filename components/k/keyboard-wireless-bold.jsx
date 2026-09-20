import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh0g8fv5q.css';
import '../../css/r/rpjopu3ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh0g8fv5q"/><path class="rpjopu3ap"/>`,
		"fallback": "streamline-ultimate:keyboard-wireless-bold",
	});
}

export default Component;
