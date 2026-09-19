import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu7ms5bok.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu7ms5bok"/>`,
		"fallback": "zmdi:minus-square",
	});
}

export default Component;
