import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmo_ecbzn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmo_ecbzn"/>`,
		"fallback": "streamline-pixel:interface-essential-navigation-menu-3",
	});
}

export default Component;
