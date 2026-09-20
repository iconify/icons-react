import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xps3pd9pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xps3pd9pj"/>`,
		"fallback": "mdi:table-account",
	});
}

export default Component;
