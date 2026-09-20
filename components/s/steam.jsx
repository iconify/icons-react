import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j48cub3np.css';
import '../../css/b/bg6fy62nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j48cub3np"/><path class="bg6fy62nr"/>`,
		"fallback": "lineicons:steam",
	});
}

export default Component;
