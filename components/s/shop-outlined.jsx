import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5675y97j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5675y97j"/>`,
		"fallback": "weui:shop-outlined",
	});
}

export default Component;
