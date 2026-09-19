import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddpxg66go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddpxg66go"/>`,
		"fallback": "boxicons:piggy-bank-filled",
	});
}

export default Component;
