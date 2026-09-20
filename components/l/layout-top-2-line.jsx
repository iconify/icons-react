import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvi7wnmts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvi7wnmts"/>`,
		"fallback": "ri:layout-top-2-line",
	});
}

export default Component;
