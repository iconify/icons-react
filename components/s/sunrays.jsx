import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bri926yrn.css';
import '../../css/b/b1qs3_bbh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bri926yrn"/><circle class="b1qs3_bbh"/>`,
		"fallback": "fxemoji:sunrays",
	});
}

export default Component;
