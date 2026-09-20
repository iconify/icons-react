import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4f08dwkt.css';
import '../../css/j/jwkkz0w_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i4f08dwkt"/><path class="jwkkz0w_c"/></g>`,
		"fallback": "tabler:squares-filled",
	});
}

export default Component;
