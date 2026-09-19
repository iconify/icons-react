import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unur3-b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unur3-b3p"/>`,
		"fallback": "eva:minus-square-fill",
	});
}

export default Component;
