import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiku0v4qh.css';
import '../../css/z/z4a7i9bif.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiku0v4qh"/><path class="z4a7i9bif"/>`,
		"fallback": "streamline-pixel:internet-network-computer-download",
	});
}

export default Component;
