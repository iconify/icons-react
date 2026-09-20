import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4t5zg9wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4t5zg9wy"/>`,
		"fallback": "tabler:music-share",
	});
}

export default Component;
