import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8x1q1cuv.css';
import '../../css/a/aw90g_bjq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8x1q1cuv"/><path class="aw90g_bjq"/>`,
		"fallback": "streamline-pixel:real-estate-building-ad",
	});
}

export default Component;
