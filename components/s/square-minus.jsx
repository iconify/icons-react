import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wev7_1bhi.css';
import '../../css/y/yz-efebcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wev7_1bhi"/><path class="yz-efebcs"/>`,
		"fallback": "stash:square-minus",
	});
}

export default Component;
