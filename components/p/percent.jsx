import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy0brxbnn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy0brxbnn"/>`,
		"fallback": "f7:percent",
	});
}

export default Component;
