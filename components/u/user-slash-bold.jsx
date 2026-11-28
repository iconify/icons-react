import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta6s0kbta.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta6s0kbta"/>`,
		"fallback": "pullo:user-slash-bold",
	});
}

export default Component;
