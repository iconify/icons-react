import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdx_jfjiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdx_jfjiy"/>`,
		"fallback": "mingcute:radar-2-line",
	});
}

export default Component;
