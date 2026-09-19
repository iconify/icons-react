import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-v5zg_-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-v5zg_-v"/>`,
		"fallback": "hugeicons:square-stack",
	});
}

export default Component;
