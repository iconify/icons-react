import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofc2p7fff.css';
import '../../css/o/o2idt1eal.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofc2p7fff"/><path class="o2idt1eal"/>`,
		"fallback": "streamline-pixel:interface-essential-signout-logout",
	});
}

export default Component;
