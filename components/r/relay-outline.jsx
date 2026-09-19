import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/ojvzb-73z.css';
import '../../css/i/i_kaqkpye.css';
import '../../css/x/x5yfotb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="ojvzb-73z"/><path class="i_kaqkpye"/><path class="x5yfotb1n"/></g>`,
		"fallback": "bitcoin-icons:relay-outline",
	});
}

export default Component;
