import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh--6bbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sh--6bbab"/>`,
		"fallback": "solar:shield-minus-bold",
	});
}

export default Component;
