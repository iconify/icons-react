import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flk5pbbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flk5pbbwz"/>`,
		"fallback": "coolicons:sheep-round",
	});
}

export default Component;
