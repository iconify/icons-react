import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsqgj0_wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsqgj0_wr"/>`,
		"fallback": "iconoir:triangle-flag-circle",
	});
}

export default Component;
