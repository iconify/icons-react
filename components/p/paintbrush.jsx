import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nc-2l0j_u.css';
import '../../css/b/bah0qkb9c.css';
import '../../css/h/h_f_e5fyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nc-2l0j_u"/><path class="bah0qkb9c"/><path class="h_f_e5fyu"/></g>`,
		"fallback": "hugeicons:paintbrush",
	});
}

export default Component;
