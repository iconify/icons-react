import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukr9nibmh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukr9nibmh"/>`,
		"fallback": "game-icons:l-brick",
	});
}

export default Component;
