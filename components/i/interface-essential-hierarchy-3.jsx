import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqp8i0b_e.css';
import '../../css/u/u1mrfxw1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqp8i0b_e"/><path class="u1mrfxw1o"/>`,
		"fallback": "streamline-pixel:interface-essential-hierarchy-3",
	});
}

export default Component;
