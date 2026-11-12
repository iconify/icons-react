import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy7st-bkc.css';
import '../../css/n/n8ezhzb1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy7st-bkc"/><path class="n8ezhzb1d"/>`,
		"fallback": "selfhst:tailscale-dark",
	});
}

export default Component;
