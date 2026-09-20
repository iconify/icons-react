import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt3y6rb7m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt3y6rb7m"/>`,
		"fallback": "simple-line-icons:social-youtube",
	});
}

export default Component;
