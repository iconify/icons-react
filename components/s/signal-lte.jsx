import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d17xp8bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d17xp8bqi"/>`,
		"fallback": "tabler:signal-lte",
	});
}

export default Component;
