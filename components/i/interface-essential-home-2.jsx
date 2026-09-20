import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdehsob5o.css';
import '../../css/q/qchodfbjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdehsob5o"/><path class="qchodfbjt"/>`,
		"fallback": "streamline-pixel:interface-essential-home-2",
	});
}

export default Component;
