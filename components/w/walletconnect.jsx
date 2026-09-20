import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddcz6lbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddcz6lbpr"/>`,
		"fallback": "simple-icons:walletconnect",
	});
}

export default Component;
