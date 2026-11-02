import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytr-c8fjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytr-c8fjd"/>`,
		"fallback": "mingcute:sun-line",
	});
}

export default Component;
