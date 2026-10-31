import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad6t1ls9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad6t1ls9e"/>`,
		"fallback": "coolicons:shield-lock-fill-round",
	});
}

export default Component;
