import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paxaq7ccy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paxaq7ccy"/>`,
		"fallback": "boxicons:minus-shield-filled",
	});
}

export default Component;
