import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv4g-3btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv4g-3btx"/>`,
		"fallback": "mdi:robber",
	});
}

export default Component;
