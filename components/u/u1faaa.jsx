import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6dzzievb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6dzzievb"/>`,
		"fallback": "dinkie-icons:u1faaa",
	});
}

export default Component;
