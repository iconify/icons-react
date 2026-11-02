import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-_jgm2kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-_jgm2kl"/>`,
		"fallback": "mingcute:shop-fill",
	});
}

export default Component;
