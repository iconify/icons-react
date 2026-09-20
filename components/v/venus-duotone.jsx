import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ui59x3aub.css';
import '../../css/d/dar05kv8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ui59x3aub"/><path class="dar05kv8d"/></g>`,
		"fallback": "keyline-icons:venus-duotone",
	});
}

export default Component;
