import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv74wh8fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv74wh8fy"/>`,
		"fallback": "proicons:paintbrush-2",
	});
}

export default Component;
