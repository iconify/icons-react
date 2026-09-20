import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4q202bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4q202bge"/>`,
		"fallback": "mdi:printer-3d-nozzle-outline",
	});
}

export default Component;
