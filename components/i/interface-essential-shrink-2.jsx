import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhty85bcl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhty85bcl"/>`,
		"fallback": "streamline-pixel:interface-essential-shrink-2",
	});
}

export default Component;
