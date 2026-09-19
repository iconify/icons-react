import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdeo76mkt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdeo76mkt"/>`,
		"fallback": "ion:ios-arrow-round-down",
	});
}

export default Component;
