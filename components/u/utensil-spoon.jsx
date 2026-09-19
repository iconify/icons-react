import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl0hn4bds.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl0hn4bds"/>`,
		"fallback": "fa-solid:utensil-spoon",
	});
}

export default Component;
