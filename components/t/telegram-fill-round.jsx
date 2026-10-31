import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbu9v-bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbu9v-bjr"/>`,
		"fallback": "coolicons:telegram-fill-round",
	});
}

export default Component;
