import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj8ddjbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hj8ddjbun"/>`,
		"fallback": "solar:round-double-alt-arrow-down-bold",
	});
}

export default Component;
