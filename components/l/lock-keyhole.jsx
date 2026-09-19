import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfe4qxb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfe4qxb_b"/>`,
		"fallback": "boxicons:lock-keyhole",
	});
}

export default Component;
