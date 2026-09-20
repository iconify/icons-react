import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7ig5bf8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7ig5bf8h"/>`,
		"fallback": "streamline-pixel:interface-essential-navigation-menu-2",
	});
}

export default Component;
