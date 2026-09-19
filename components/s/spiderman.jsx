import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxh8cdbwr.css';

const viewBox = {"width":835,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxh8cdbwr"/>`,
		"fallback": "whh:spiderman",
	});
}

export default Component;
