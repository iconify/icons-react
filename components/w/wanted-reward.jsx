import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhkjnuyjh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhkjnuyjh"/>`,
		"fallback": "game-icons:wanted-reward",
	});
}

export default Component;
