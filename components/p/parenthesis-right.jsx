import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr22n6bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr22n6bpg"/>`,
		"fallback": "iconaut:parenthesis-right",
	});
}

export default Component;
