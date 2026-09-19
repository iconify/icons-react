import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbv6qjqqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbv6qjqqs"/>`,
		"fallback": "boxicons:search-big-filled",
	});
}

export default Component;
