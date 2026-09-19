import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/u_bwfnbeo.css';
import '../../css/f/fnttlk7wa.css';
import '../../css/h/h0mr_w5yi.css';
import '../../css/b/blxgvjbci.css';
import '../../css/d/d9ndedbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="u_bwfnbeo"/><circle class="fnttlk7wa"/><circle class="h0mr_w5yi"/><path class="blxgvjbci"/><path class="d9ndedbon"/></g>`,
		"fallback": "hugeicons:pulley",
	});
}

export default Component;
