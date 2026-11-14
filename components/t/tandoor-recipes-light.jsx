import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq_6glbsc.css';
import '../../css/k/k2e-tqo9l.css';
import '../../css/y/ysphp0b9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq_6glbsc"/><path class="k2e-tqo9l"/><path class="ysphp0b9e"/>`,
		"fallback": "selfhst:tandoor-recipes-light",
	});
}

export default Component;
