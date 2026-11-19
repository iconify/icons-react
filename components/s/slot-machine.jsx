import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqg6d3e-k.css';
import '../../css/p/pzgvfgrdo.css';
import '../../css/r/rofqitvet.css';
import '../../css/i/ifofgdl4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eqg6d3e-k"/><path class="pzgvfgrdo"/><path class="rofqitvet"/><path class="ifofgdl4q"/></g>`,
		"fallback": "andrsrxn:slot-machine",
	});
}

export default Component;
