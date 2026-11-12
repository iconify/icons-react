import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksigsecyg.css';
import '../../css/y/y-4aifk4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksigsecyg"/><path class="y-4aifk4k"/>`,
		"fallback": "selfhst:pf2etools",
	});
}

export default Component;
