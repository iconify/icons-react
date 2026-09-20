import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-x7c5buw.css';
import '../../css/w/wm_k1-bsq.css';
import '../../css/u/ugujyjv5w.css';
import '../../css/x/xl6e-cvow.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)" class="o-x7c5buw"><path class="wm_k1-bsq"/><path class="ugujyjv5w"/><path class="xl6e-cvow"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "si:settings-applications-line",
	});
}

export default Component;
