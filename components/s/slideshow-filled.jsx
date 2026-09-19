import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuyjo_bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuyjo_bfa"/>`,
		"fallback": "boxicons:slideshow-filled",
	});
}

export default Component;
