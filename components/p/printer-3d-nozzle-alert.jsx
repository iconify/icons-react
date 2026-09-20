import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx3w-qynf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx3w-qynf"/>`,
		"fallback": "mdi:printer-3d-nozzle-alert",
	});
}

export default Component;
