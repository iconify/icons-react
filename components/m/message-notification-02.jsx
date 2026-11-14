import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fdha4crhi.css';
import '../../css/k/kcz4c0b0u.css';
import '../../css/x/xqkz5x74a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fdha4crhi"/><path class="kcz4c0b0u"/><path class="xqkz5x74a"/></g>`,
		"fallback": "hugeicons:message-notification-02",
	});
}

export default Component;
