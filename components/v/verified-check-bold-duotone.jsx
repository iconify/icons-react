import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0rjtzvug.css';
import '../../css/w/wj329ubli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0rjtzvug"/><path class="wj329ubli"/>`,
		"fallback": "solar:verified-check-bold-duotone",
	});
}

export default Component;
