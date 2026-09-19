import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1hqot9ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1hqot9ea"/>`,
		"fallback": "iconamoon:player-next-thin",
	});
}

export default Component;
