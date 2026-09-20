import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1qg1ub9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1qg1ub9h"/>`,
		"fallback": "selfhst:rancher-k3s-dark",
	});
}

export default Component;
