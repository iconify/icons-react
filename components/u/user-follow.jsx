import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3z_u7bad.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3z_u7bad"/>`,
		"fallback": "simple-line-icons:user-follow",
	});
}

export default Component;
