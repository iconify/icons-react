import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf-i5z3nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mf-i5z3nc"/>`,
		"fallback": "solar:stream-bold",
	});
}

export default Component;
