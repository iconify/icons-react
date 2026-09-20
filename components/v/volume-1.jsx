import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9cctqrwu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9cctqrwu"/>`,
		"fallback": "simple-line-icons:volume-1",
	});
}

export default Component;
