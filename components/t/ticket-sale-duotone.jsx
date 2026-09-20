import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n72v6m_wk.css';
import '../../css/f/f26xc_b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n72v6m_wk"/><path class="f26xc_b6o"/></g>`,
		"fallback": "reicon:ticket-sale-duotone",
	});
}

export default Component;
