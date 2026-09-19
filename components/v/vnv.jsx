import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo1e-7b4g.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo1e-7b4g"/>`,
		"fallback": "fa-brands:vnv",
	});
}

export default Component;
