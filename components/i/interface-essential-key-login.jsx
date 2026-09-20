import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6twclbpr.css';
import '../../css/p/poe7slbkj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6twclbpr"/><path class="poe7slbkj"/>`,
		"fallback": "streamline-pixel:interface-essential-key-login",
	});
}

export default Component;
