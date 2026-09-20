import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t26_t2uqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t26_t2uqf"/>`,
		"fallback": "solar:lamp-bold",
	});
}

export default Component;
