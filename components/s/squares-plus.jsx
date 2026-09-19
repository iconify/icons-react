import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5omkxb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5omkxb-y"/>`,
		"fallback": "heroicons-outline:squares-plus",
	});
}

export default Component;
