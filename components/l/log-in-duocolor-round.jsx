import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/slkd4ybpr.css';
import '../../css/x/x7wdoublu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="slkd4ybpr"/><path class="x7wdoublu"/></g>`,
		"fallback": "coolicons:log-in-duocolor-round",
	});
}

export default Component;
