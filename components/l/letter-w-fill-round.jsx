import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-r9umawa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-r9umawa"/>`,
		"fallback": "coolicons:letter-w-fill-round",
	});
}

export default Component;
