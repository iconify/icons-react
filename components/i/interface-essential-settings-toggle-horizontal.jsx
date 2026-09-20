import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyf5y1bmq.css';
import '../../css/c/c74pkebbh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyf5y1bmq"/><path class="c74pkebbh"/>`,
		"fallback": "streamline-pixel:interface-essential-settings-toggle-horizontal",
	});
}

export default Component;
