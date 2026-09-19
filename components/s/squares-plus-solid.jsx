import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ardha2bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ardha2bkl"/>`,
		"fallback": "heroicons:squares-plus-solid",
	});
}

export default Component;
