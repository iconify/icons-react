import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uggz1wboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uggz1wboo"/>`,
		"fallback": "mdi:wallet-outline",
	});
}

export default Component;
