import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/getfrabcc.css';
import '../../css/h/h99or5zfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="getfrabcc"/><path class="h99or5zfb"/>`,
		"fallback": "solar:revote-bold-duotone",
	});
}

export default Component;
