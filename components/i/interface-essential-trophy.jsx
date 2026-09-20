import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd6aqd9fc.css';
import '../../css/t/t0wm04bvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd6aqd9fc"/><path class="t0wm04bvd"/>`,
		"fallback": "streamline-pixel:interface-essential-trophy",
	});
}

export default Component;
