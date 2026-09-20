import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq1lalb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq1lalb-h"/>`,
		"fallback": "reicon:wallet-minus3-filled",
	});
}

export default Component;
