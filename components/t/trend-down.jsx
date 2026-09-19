import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu_qqx5qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu_qqx5qu"/>`,
		"fallback": "griddy-icons:trend-down",
	});
}

export default Component;
