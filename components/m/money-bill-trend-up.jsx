import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vny3_-bya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vny3_-bya"/>`,
		"fallback": "fa6-solid:money-bill-trend-up",
	});
}

export default Component;
