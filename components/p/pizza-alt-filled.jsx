import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojv9pubkm.css';
import '../../css/h/hur7hdsnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojv9pubkm"/><path class="hur7hdsnm"/>`,
		"fallback": "boxicons:pizza-alt-filled",
	});
}

export default Component;
