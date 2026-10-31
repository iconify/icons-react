import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmossdbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmossdbfb"/>`,
		"fallback": "coolicons:move-diagonal-1-bulk-round",
	});
}

export default Component;
