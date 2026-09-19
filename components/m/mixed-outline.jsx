import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q5cj01boe.css';
import '../../css/b/bqj_4ebkn.css';
import '../../css/y/y_x2e9jem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q5cj01boe"/><path class="bqj_4ebkn"/><path class="y_x2e9jem"/></g>`,
		"fallback": "bitcoin-icons:mixed-outline",
	});
}

export default Component;
