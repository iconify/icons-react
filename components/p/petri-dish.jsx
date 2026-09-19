import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2k3m0xzf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2k3m0xzf"/>`,
		"fallback": "dinkie-icons:petri-dish",
	});
}

export default Component;
