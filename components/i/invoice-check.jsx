import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeg7zcc-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeg7zcc-k"/>`,
		"fallback": "mdi:invoice-check",
	});
}

export default Component;
