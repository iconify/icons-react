import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaionfb8b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaionfb8b"/>`,
		"fallback": "streamline-pixel:interface-essential-find-text",
	});
}

export default Component;
