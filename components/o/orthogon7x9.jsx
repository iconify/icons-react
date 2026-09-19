import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-bjmnb7h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-bjmnb7h"/>`,
		"fallback": "dinkie-icons:orthogon7x9",
	});
}

export default Component;
