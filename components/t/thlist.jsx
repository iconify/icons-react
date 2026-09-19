import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzygb0b8i.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzygb0b8i"/>`,
		"fallback": "whh:thlist",
	});
}

export default Component;
