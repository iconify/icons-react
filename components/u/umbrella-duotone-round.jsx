import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjn-ivbpz.css';
import '../../css/z/zqo7c_bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xjn-ivbpz"/><path class="zqo7c_bid"/></g>`,
		"fallback": "coolicons:umbrella-duotone-round",
	});
}

export default Component;
