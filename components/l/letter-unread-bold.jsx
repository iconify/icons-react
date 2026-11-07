import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybu95d8og.css';
import '../../css/z/zh2x-vuty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybu95d8og"/><path clip-rule="evenodd" class="zh2x-vuty"/>`,
		"fallback": "solar:letter-unread-bold",
	});
}

export default Component;
