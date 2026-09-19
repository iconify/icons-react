import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj008nblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hj008nblr"/>`,
		"fallback": "basil:telegram-outline",
	});
}

export default Component;
