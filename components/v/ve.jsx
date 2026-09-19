import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6opa5bli.css';
import '../../css/m/m36lxmbvf.css';
import '../../css/j/jkij9acfo.css';
import '../../css/i/iwn3hz_ww.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n6opa5bli"/><path class="m36lxmbvf"/><path class="jkij9acfo"/><path class="iwn3hz_ww"/></g>`,
		"fallback": "cif:ve",
	});
}

export default Component;
