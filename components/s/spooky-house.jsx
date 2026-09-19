import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhp6d1bjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhp6d1bjv"/>`,
		"fallback": "game-icons:spooky-house",
	});
}

export default Component;
