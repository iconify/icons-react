import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3l6mhb4c.css';
import '../../css/q/qoes-qt6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3l6mhb4c"/><path class="qoes-qt6e"/>`,
		"fallback": "streamline-ultimate:monetization-tablet-bold",
	});
}

export default Component;
