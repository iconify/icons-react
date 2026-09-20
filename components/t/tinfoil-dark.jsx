import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w10xf1pso.css';
import '../../css/m/mw546i83n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w10xf1pso"/><path class="mw546i83n"/>`,
		"fallback": "selfhst:tinfoil-dark",
	});
}

export default Component;
