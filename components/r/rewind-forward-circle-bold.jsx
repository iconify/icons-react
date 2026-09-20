import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa1lvmb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fa1lvmb-i"/>`,
		"fallback": "solar:rewind-forward-circle-bold",
	});
}

export default Component;
