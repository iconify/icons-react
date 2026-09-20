import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw6b3sbsa.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw6b3sbsa"/>`,
		"fallback": "wi:owm-day-501",
	});
}

export default Component;
