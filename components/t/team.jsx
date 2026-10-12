import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lw2t91b3o.css';
import '../../css/p/pqorn4b5k.css';
import '../../css/w/wx8o9908t.css';
import '../../css/y/yz2f90bfa.css';
import '../../css/s/s6xa55bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lw2t91b3o"/><path class="pqorn4b5k"/><path class="wx8o9908t"/><path class="yz2f90bfa"/><path class="s6xa55bki"/></g>`,
		"fallback": "andrsrxn:team",
	});
}

export default Component;
