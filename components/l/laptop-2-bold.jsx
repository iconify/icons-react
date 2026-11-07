import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2urmqbds.css';
import '../../css/e/ezj2uyggj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2urmqbds"/><path class="ezj2uyggj"/>`,
		"fallback": "solar:laptop-2-bold",
	});
}

export default Component;
