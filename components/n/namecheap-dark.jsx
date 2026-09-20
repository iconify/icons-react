import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swmlmj4nl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swmlmj4nl"/>`,
		"fallback": "selfhst:namecheap-dark",
	});
}

export default Component;
