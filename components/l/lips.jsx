import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frfjys05t.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frfjys05t"/>`,
		"fallback": "whh:lips",
	});
}

export default Component;
