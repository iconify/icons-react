import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwns-mv1q.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwns-mv1q"/>`,
		"fallback": "zmdi:network-warning",
	});
}

export default Component;
