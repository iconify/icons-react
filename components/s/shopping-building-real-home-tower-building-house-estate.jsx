import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7ckzxhlz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7ckzxhlz"/>`,
		"fallback": "streamline:shopping-building-real-home-tower-building-house-estate",
	});
}

export default Component;
