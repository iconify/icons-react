import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks1b49xoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks1b49xoq"/>`,
		"fallback": "mingcute:spotify-line",
	});
}

export default Component;
