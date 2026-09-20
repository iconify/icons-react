import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lv46fdvld.css';
import '../../css/z/z3g4_cbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lv46fdvld"/><path class="z3g4_cbem"/></g>`,
		"fallback": "keyline-icons:list-sort-two-tone",
	});
}

export default Component;
