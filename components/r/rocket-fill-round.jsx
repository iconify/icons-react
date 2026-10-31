import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uah-6e1tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uah-6e1tm"/>`,
		"fallback": "coolicons:rocket-fill-round",
	});
}

export default Component;
