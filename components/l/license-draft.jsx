import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tu0p47bht.css';
import '../../css/l/l2nars-_e.css';
import '../../css/o/os-5hqfau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tu0p47bht"/><path class="l2nars-_e"/><path class="os-5hqfau"/></g>`,
		"fallback": "hugeicons:license-draft",
	});
}

export default Component;
