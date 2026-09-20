import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibqkk_jsm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibqkk_jsm"/>`,
		"fallback": "pinhead:motorcycle-and-baht",
	});
}

export default Component;
