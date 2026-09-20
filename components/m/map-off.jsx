import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb5q0f_mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb5q0f_mr"/>`,
		"fallback": "tabler:map-off",
	});
}

export default Component;
