import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiy2c6lkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tiy2c6lkn"/>`,
		"fallback": "solar:spedometer-max-bold",
	});
}

export default Component;
