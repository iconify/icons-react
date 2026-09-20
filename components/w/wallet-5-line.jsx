import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz1og7bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz1og7bbp"/>`,
		"fallback": "mingcute:wallet-5-line",
	});
}

export default Component;
