import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xanv8655i.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xanv8655i"/>`,
		"fallback": "foundation:social-facebook",
	});
}

export default Component;
