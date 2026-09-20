import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rftn5iwkm.css';
import '../../css/y/y30ruackf.css';
import '../../css/y/ympij-b7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rftn5iwkm"/><path class="y30ruackf"/><path class="ympij-b7c"/>`,
		"fallback": "streamline-pixel:interface-essential-cursor-select",
	});
}

export default Component;
