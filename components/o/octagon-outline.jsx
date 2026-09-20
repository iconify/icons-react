import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q98t-9r5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q98t-9r5l"/>`,
		"fallback": "mdi:octagon-outline",
	});
}

export default Component;
