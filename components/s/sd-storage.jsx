import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_z1ymbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_z1ymbhi"/>`,
		"fallback": "mdi:sd-storage",
	});
}

export default Component;
