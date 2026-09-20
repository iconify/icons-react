import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvhypo3qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvhypo3qj"/>`,
		"fallback": "mingcute:sun-fog-line",
	});
}

export default Component;
