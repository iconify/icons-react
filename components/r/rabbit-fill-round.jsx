import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz7rj6bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz7rj6bxb"/>`,
		"fallback": "coolicons:rabbit-fill-round",
	});
}

export default Component;
