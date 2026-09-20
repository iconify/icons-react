import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3lbm0bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3lbm0bgb"/>`,
		"fallback": "majesticons:lightning-bolt-line",
	});
}

export default Component;
