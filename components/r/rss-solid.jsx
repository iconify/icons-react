import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n_l1h0b_h.css';
import '../../css/a/a7_acabeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n_l1h0b_h"/><path class="a7_acabeg"/></g>`,
		"fallback": "mynaui:rss-solid",
	});
}

export default Component;
