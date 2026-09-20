import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctfz9yp6p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctfz9yp6p"/>`,
		"fallback": "pinhead:lattice-tower-with-observation-deck-on-ground",
	});
}

export default Component;
