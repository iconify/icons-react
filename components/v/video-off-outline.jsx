import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xop17zbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xop17zbqi"/>`,
		"fallback": "mdi:video-off-outline",
	});
}

export default Component;
