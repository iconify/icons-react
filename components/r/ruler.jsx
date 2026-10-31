import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/ce0gr_brx.css';
import '../../css/z/z_vgp2vfm.css';
import '../../css/u/u88wzbcmc.css';
import '../../css/z/zpb9wxbsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ce0gr_brx wm-shadow"/><path class="wm-shadow z_vgp2vfm"/><path class="u88wzbcmc"/><path class="zpb9wxbsl"/></g>`,
		"fallback": "withicons-brutal:ruler",
	});
}

export default Component;
