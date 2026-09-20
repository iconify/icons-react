import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnf5wfx0t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnf5wfx0t"/>`,
		"fallback": "streamline-pixel:interface-essential-reflect-down",
	});
}

export default Component;
