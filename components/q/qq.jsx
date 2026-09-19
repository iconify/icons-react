import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n24_ilbyh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n24_ilbyh"/>`,
		"fallback": "dinkie-icons:qq",
	});
}

export default Component;
