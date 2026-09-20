import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1u2czauv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1u2czauv"/>`,
		"fallback": "mdi:sync-circle",
	});
}

export default Component;
