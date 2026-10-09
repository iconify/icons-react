import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxt_aqbhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxt_aqbhf"/>`,
		"fallback": "energy-icons:solar-forecast-48-bold",
	});
}

export default Component;
