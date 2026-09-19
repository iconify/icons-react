import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0-a0abty.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0-a0abty"/>`,
		"fallback": "ep:shopping-cart",
	});
}

export default Component;
