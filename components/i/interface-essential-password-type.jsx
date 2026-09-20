import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmok0r2zk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmok0r2zk"/>`,
		"fallback": "streamline-pixel:interface-essential-password-type",
	});
}

export default Component;
