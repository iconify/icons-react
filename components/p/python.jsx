import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9oaitb4y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9oaitb4y"/>`,
		"fallback": "devicon-plain:python",
	});
}

export default Component;
