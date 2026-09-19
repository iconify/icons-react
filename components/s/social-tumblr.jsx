import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pchasnb4f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pchasnb4f"/>`,
		"fallback": "foundation:social-tumblr",
	});
}

export default Component;
