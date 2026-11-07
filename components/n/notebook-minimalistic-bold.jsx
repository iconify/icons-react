import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwqzobcjb.css';
import '../../css/i/ildxxvqdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwqzobcjb"/><path class="ildxxvqdd"/>`,
		"fallback": "solar:notebook-minimalistic-bold",
	});
}

export default Component;
