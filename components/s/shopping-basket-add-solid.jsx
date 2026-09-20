import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuab0w5hh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fuab0w5hh"/>`,
		"fallback": "streamline-flex:shopping-basket-add-solid",
	});
}

export default Component;
