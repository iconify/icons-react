import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_c8fjbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_c8fjbwu"/>`,
		"fallback": "mdi:variable",
	});
}

export default Component;
