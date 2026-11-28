import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t93_9wbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t93_9wbbg"/>`,
		"fallback": "iconaut:soup-solid",
	});
}

export default Component;
