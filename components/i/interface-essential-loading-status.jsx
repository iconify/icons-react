import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb6s7laxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb6s7laxp"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-status",
	});
}

export default Component;
