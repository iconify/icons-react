import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc_x-b-xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nc_x-b-xu"/>`,
		"fallback": "solar:streets-outline",
	});
}

export default Component;
