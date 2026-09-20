import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn1jyeb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn1jyeb1d"/>`,
		"fallback": "simple-icons:unlicense",
	});
}

export default Component;
