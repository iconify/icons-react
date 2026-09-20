import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flpv5tb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flpv5tb-r"/>`,
		"fallback": "mdi:send-circle",
	});
}

export default Component;
