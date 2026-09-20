import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyjr1g5qu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyjr1g5qu"/>`,
		"fallback": "streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger",
	});
}

export default Component;
