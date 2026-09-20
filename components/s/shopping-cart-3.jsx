import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqg_y98-f.css';
import '../../css/y/yy96u41yg.css';
import '../../css/e/e9usumb6x.css';
import '../../css/c/c8kh9nthq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fqg_y98-f"/><path class="yy96u41yg"/><path class="e9usumb6x"/><path class="c8kh9nthq"/></g>`,
		"fallback": "streamline-cyber-color:shopping-cart-3",
	});
}

export default Component;
