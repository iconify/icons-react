import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stdd_k7yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stdd_k7yd"/>`,
		"fallback": "ri:taobao-line",
	});
}

export default Component;
