import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkc2bcb8o.css';
import '../../css/o/oevl03-th.css';
import '../../css/t/tv3azrqgh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkc2bcb8o"/><path class="oevl03-th"/><path class="tv3azrqgh"/>`,
		"fallback": "ion:ios-restaurant",
	});
}

export default Component;
