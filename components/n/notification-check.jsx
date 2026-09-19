import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-34ubcjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-34ubcjq"/>`,
		"fallback": "griddy-icons:notification-check",
	});
}

export default Component;
