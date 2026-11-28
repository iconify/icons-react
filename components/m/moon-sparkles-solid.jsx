import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_9ku4bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_9ku4bcu"/>`,
		"fallback": "iconaut:moon-sparkles-solid",
	});
}

export default Component;
