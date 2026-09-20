import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e49dumbid.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e49dumbid"/>`,
		"fallback": "streamline-pixel:interface-essential-wifi-signal",
	});
}

export default Component;
