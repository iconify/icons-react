import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0yqaacfm.css';
import '../../css/g/g4ri23blu.css';
import '../../css/h/hovqi_wid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0yqaacfm"/><path class="g4ri23blu"/><path class="hovqi_wid"/>`,
		"fallback": "streamline-ultimate:multiple-actions-chat-bold",
	});
}

export default Component;
