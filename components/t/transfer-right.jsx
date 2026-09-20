import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2-y6acjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2-y6acjv"/>`,
		"fallback": "lets-icons:transfer-right",
	});
}

export default Component;
