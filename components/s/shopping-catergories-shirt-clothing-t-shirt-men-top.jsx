import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7ze1_r8q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7ze1_r8q"/>`,
		"fallback": "streamline:shopping-catergories-shirt-clothing-t-shirt-men-top",
	});
}

export default Component;
