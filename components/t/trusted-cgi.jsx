import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7wy-vb7x.css';
import '../../css/x/xnp4gerbh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7wy-vb7x"/><path class="xnp4gerbh"/>`,
		"fallback": "selfhst:trusted-cgi",
	});
}

export default Component;
