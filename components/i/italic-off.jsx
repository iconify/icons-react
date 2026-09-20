import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqzc6h09o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqzc6h09o"/>`,
		"fallback": "tabler:italic-off",
	});
}

export default Component;
