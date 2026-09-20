import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/v/vlfpssodi.css';
import '../../css/n/np1e_hbeg.css';
import '../../css/r/rzs0jlbll.css';
import '../../css/m/mg0h9nblz.css';
import '../../css/h/h1zzhq-sp.css';
import '../../css/e/eb7txqbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><circle class="vlfpssodi"/><circle transform="matrix(1 0 0 -1 14 16)" class="np1e_hbeg"/><path class="rzs0jlbll"/><path class="mg0h9nblz"/><path class="h1zzhq-sp"/><path class="eb7txqbka"/></g>`,
		"fallback": "solar:tuning-square-linear",
	});
}

export default Component;
