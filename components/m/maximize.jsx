import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_e4jie8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_e4jie8r"/>`,
		"fallback": "boxicons:maximize",
	});
}

export default Component;
