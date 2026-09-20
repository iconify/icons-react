import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nela8-axq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nela8-axq"/>`,
		"fallback": "mdi:logic-gate-xnor",
	});
}

export default Component;
