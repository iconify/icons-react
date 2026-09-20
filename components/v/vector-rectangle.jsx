import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rllqu9bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rllqu9bus"/>`,
		"fallback": "mdi:vector-rectangle",
	});
}

export default Component;
