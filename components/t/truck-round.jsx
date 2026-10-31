import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki311fb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki311fb_g"/>`,
		"fallback": "coolicons:truck-round",
	});
}

export default Component;
