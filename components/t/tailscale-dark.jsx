import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy7st-bkc.css';
import '../../css/u/ub4v3ecgj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy7st-bkc"/><path class="ub4v3ecgj"/>`,
		"fallback": "selfhst:tailscale-dark",
	});
}

export default Component;
