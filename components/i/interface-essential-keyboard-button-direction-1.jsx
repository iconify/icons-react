import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dohw6xbsy.css';
import '../../css/q/qyf7g7bbs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dohw6xbsy"/><path class="qyf7g7bbs"/>`,
		"fallback": "streamline-pixel:interface-essential-keyboard-button-direction-1",
	});
}

export default Component;
