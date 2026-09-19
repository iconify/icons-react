import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-bb6ccxt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="translate(55.328 -99820.702)scale(96.7529)" class="k-bb6ccxt"/>`,
		"fallback": "bpmn:task",
	});
}

export default Component;
