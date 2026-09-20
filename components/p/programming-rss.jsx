import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz2p-gb2y.css';
import '../../css/q/qlm8aybxt.css';
import '../../css/l/l8l993bhg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz2p-gb2y"/><path class="qlm8aybxt"/><path class="l8l993bhg"/>`,
		"fallback": "streamline-block:programming-rss",
	});
}

export default Component;
