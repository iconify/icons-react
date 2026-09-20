import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-6y14npf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-6y14npf"/>`,
		"fallback": "solar:round-alt-arrow-down-bold",
	});
}

export default Component;
