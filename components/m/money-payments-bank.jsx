import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_qnxmbps.css';
import '../../css/n/np6k2ybks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_qnxmbps"/><path class="np6k2ybks"/>`,
		"fallback": "streamline-pixel:money-payments-bank",
	});
}

export default Component;
