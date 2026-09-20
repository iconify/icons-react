import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vve2ttzer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vve2ttzer"/>`,
		"fallback": "lets-icons:sort-arrow-light",
	});
}

export default Component;
