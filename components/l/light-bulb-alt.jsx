import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4agvvbwr.css';
import '../../css/v/vy6hizqps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4agvvbwr"/><path class="vy6hizqps"/>`,
		"fallback": "boxicons:light-bulb-alt",
	});
}

export default Component;
