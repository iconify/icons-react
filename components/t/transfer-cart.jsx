import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u59_y7bnt.css';
import '../../css/c/c6x08t_hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u59_y7bnt"/><path class="c6x08t_hq"/></g>`,
		"fallback": "streamline-sharp:transfer-cart",
	});
}

export default Component;
