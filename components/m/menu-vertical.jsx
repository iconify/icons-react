import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uotk91dww.css';
import '../../css/j/jo17u180x.css';
import '../../css/i/ib318w12k.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><circle class="uotk91dww"/><circle class="jo17u180x"/><circle class="ib318w12k"/></g>`,
		"fallback": "system-uicons:menu-vertical",
	});
}

export default Component;
