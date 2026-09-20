import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puz4eh_ne.css';
import '../../css/w/wsqmqdbpx.css';
import '../../css/p/pop7_3cjw.css';
import '../../css/m/mrr_ff_5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="puz4eh_ne"/><path class="wsqmqdbpx"/><path class="pop7_3cjw"/><path class="mrr_ff_5j"/></g>`,
		"fallback": "streamline-cyber-color:shopping-cart-add",
	});
}

export default Component;
