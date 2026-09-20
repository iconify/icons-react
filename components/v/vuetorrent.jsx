import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u54g6q6wc.css';
import '../../css/m/m-64o3ble.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u54g6q6wc"/><path class="m-64o3ble"/>`,
		"fallback": "selfhst:vuetorrent",
	});
}

export default Component;
