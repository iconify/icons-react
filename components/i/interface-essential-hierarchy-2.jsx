import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3m4t9b0x.css';
import '../../css/j/j55bh1bul.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3m4t9b0x"/><path class="j55bh1bul"/>`,
		"fallback": "streamline-pixel:interface-essential-hierarchy-2",
	});
}

export default Component;
