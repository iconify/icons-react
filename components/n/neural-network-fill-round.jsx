import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnq1seb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnq1seb5e"/>`,
		"fallback": "coolicons:neural-network-fill-round",
	});
}

export default Component;
