import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldh1uqbeu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldh1uqbeu"/>`,
		"fallback": "carbon:text-tracking",
	});
}

export default Component;
