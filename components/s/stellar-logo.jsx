import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thvq54boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thvq54boj"/>`,
		"fallback": "streamline-logos:stellar-logo",
	});
}

export default Component;
