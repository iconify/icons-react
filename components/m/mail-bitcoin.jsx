import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8nc_j7iv.css';
import '../../css/f/fj21g6bqb.css';
import '../../css/v/v4b_1hbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q8nc_j7iv"/><path class="fj21g6bqb"/><path class="v4b_1hbpn"/></g>`,
		"fallback": "tabler:mail-bitcoin",
	});
}

export default Component;
