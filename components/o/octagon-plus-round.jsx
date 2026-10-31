import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnesolb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnesolb2d"/>`,
		"fallback": "coolicons:octagon-plus-round",
	});
}

export default Component;
