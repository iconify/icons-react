import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wez-d0bjf.css';
import '../../css/a/a3l3mwbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wez-d0bjf"/><path class="a3l3mwbwy"/>`,
		"fallback": "lineicons:mastercard",
	});
}

export default Component;
