import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tstl_rxkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tstl_rxkr"/>`,
		"fallback": "mdi:smoke-detector-alert",
	});
}

export default Component;
