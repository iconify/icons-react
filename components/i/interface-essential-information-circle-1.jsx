import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a80ro7joo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a80ro7joo"/>`,
		"fallback": "streamline-pixel:interface-essential-information-circle-1",
	});
}

export default Component;
