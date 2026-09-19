import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5nmllbgc.css';
import '../../css/m/m3qb8jb6u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5nmllbgc"/><path class="m3qb8jb6u"/>`,
		"fallback": "devicon:mongoose",
	});
}

export default Component;
