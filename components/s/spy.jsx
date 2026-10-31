import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gk06i0kzo.css';
import '../../css/w/whfi3pj-c.css';
import '../../css/m/m-ca285hp.css';
import '../../css/g/ga2uwqbuh.css';
import '../../css/p/pf2y4kbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gk06i0kzo wm-shadow"/><path class="whfi3pj-c"/><path class="m-ca285hp"/><path class="ga2uwqbuh"/><path class="pf2y4kbfo"/></g>`,
		"fallback": "withicons-retro:spy",
	});
}

export default Component;
