import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2p6bwb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2p6bwb5r"/>`,
		"fallback": "mdi:weather-dust",
	});
}

export default Component;
