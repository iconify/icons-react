import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlm2j4byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlm2j4byg"/>`,
		"fallback": "mingcute:reddit-fill",
	});
}

export default Component;
