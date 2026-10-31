import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn8qimbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn8qimbrb"/>`,
		"fallback": "coolicons:list-plus-fill-round",
	});
}

export default Component;
