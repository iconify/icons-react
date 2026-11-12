import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w10xf1pso.css';
import '../../css/h/hdiy0kbpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w10xf1pso"/><path class="hdiy0kbpc"/>`,
		"fallback": "selfhst:tinfoil-dark",
	});
}

export default Component;
