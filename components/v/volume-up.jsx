import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8pjv5b9j.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8pjv5b9j"/>`,
		"fallback": "zmdi:volume-up",
	});
}

export default Component;
