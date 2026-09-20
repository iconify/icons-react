import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx1qh9vvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx1qh9vvb"/>`,
		"fallback": "tabler:tags-off",
	});
}

export default Component;
