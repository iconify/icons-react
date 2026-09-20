import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eew8t0b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eew8t0b7k"/>`,
		"fallback": "majesticons:scanner-line",
	});
}

export default Component;
