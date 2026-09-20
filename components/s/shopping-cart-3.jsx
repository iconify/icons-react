import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/p2-zwk2rn.css';
import '../../css/f/frqp0wb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="p2-zwk2rn"/><path class="frqp0wb-x"/></g>`,
		"fallback": "streamline-cyber:shopping-cart-3",
	});
}

export default Component;
