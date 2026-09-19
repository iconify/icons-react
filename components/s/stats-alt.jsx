import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc8mtrb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc8mtrb3w"/>`,
		"fallback": "gridicons:stats-alt",
	});
}

export default Component;
