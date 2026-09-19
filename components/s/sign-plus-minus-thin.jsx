import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fun39o8tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fun39o8tg"/>`,
		"fallback": "iconamoon:sign-plus-minus-thin",
	});
}

export default Component;
