import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqwv9fbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sqwv9fbsp"/>`,
		"fallback": "solar:podcast-outline",
	});
}

export default Component;
