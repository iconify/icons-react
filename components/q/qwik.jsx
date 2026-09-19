import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1rj7u0mj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1rj7u0mj"/>`,
		"fallback": "devicon-plain:qwik",
	});
}

export default Component;
