import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mozc1bb5c.css';
import '../../css/a/a1ypjyb_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mozc1bb5c"/><path class="a1ypjyb_n"/>`,
		"fallback": "fxemoji:phonewithpage",
	});
}

export default Component;
