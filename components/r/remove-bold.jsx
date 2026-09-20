import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lb3tuvb1c.css';
import '../../css/n/nk_brl4au.css';
import '../../css/w/wyduebbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lb3tuvb1c"/><path class="nk_brl4au"/><path class="wyduebbnc"/></g>`,
		"fallback": "streamline-ultimate-color:remove-bold",
	});
}

export default Component;
