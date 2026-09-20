import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpoo19blv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tpoo19blv"/>`,
		"fallback": "solar:ticket-bold",
	});
}

export default Component;
