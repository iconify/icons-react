import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zijm3bbic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zijm3bbic"/>`,
		"fallback": "selfhst:uptime-monitor-dark",
	});
}

export default Component;
