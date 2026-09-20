import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u65p3ybcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u65p3ybcd"/>`,
		"fallback": "ri:store-fill",
	});
}

export default Component;
