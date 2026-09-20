import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abe4_nbce.css';
import '../../css/e/ecpcwmbmr.css';
import '../../css/l/la8qz22na.css';
import '../../css/r/rwwgm7bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="abe4_nbce"/><circle class="ecpcwmbmr"/><circle class="la8qz22na"/><path clip-rule="evenodd" class="rwwgm7bpd"/></g>`,
		"fallback": "lets-icons:lol",
	});
}

export default Component;
