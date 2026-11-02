import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iks4w9psj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iks4w9psj"/>`,
		"fallback": "mingcute:middle-finger-fill",
	});
}

export default Component;
