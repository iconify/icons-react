import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuptu_q2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuptu_q2r"/>`,
		"fallback": "ri:layout-column-line",
	});
}

export default Component;
