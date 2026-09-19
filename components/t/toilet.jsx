import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp9j1o_0y.css';
import '../../css/u/uf_f1g_xb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp9j1o_0y"/><path class="uf_f1g_xb"/>`,
		"fallback": "fxemoji:toilet",
	});
}

export default Component;
