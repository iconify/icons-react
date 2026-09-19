import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6eeu44gh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6eeu44gh"/>`,
		"fallback": "dinkie-icons:u1faab",
	});
}

export default Component;
