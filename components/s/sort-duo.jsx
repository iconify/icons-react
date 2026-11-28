import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy6mvj7zt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rwdt3_bxc.css';
import '../../css/c/c7_ylbc_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy6mvj7zt secondary"/><g class="dt0cm9dhy primary"><path class="rwdt3_bxc"/><path class="c7_ylbc_p"/></g>`,
		"fallback": "iconaut:sort-duo",
	});
}

export default Component;
