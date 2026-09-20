import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xybxuobap.css';
import '../../css/n/nu04c2bfa.css';
import '../../css/d/d490hebuh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xybxuobap"/><path class="nu04c2bfa"/><path class="d490hebuh"/>`,
		"fallback": "streamline-pixel:interface-essential-message",
	});
}

export default Component;
