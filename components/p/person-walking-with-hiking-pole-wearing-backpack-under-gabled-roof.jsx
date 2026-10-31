import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruh8bqbry.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruh8bqbry"/>`,
		"fallback": "pinhead:person-walking-with-hiking-pole-wearing-backpack-under-gabled-roof",
	});
}

export default Component;
