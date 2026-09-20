import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlqj5_bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlqj5_bql"/>`,
		"fallback": "majesticons:logout-line",
	});
}

export default Component;
