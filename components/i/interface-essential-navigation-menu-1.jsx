import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx5d-4rvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx5d-4rvd"/>`,
		"fallback": "streamline-pixel:interface-essential-navigation-menu-1",
	});
}

export default Component;
