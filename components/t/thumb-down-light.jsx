import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q23-jybty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q23-jybty"/>`,
		"fallback": "stash:thumb-down-light",
	});
}

export default Component;
