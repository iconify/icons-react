import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2p99079n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2p99079n"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-circle-1",
	});
}

export default Component;
