import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mpi1ahbrd.css';
import '../../css/b/b-x3ppb_j.css';
import '../../css/i/ic9ebcqwq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mpi1ahbrd"/><path clip-rule="evenodd" class="b-x3ppb_j"/><path class="ic9ebcqwq"/></g>`,
		"fallback": "icon-park-outline:people-minus",
	});
}

export default Component;
