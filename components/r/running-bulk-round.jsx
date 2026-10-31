import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujjkb6bzk.css';
import '../../css/v/vcz-z1b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujjkb6bzk"/><path class="vcz-z1b1w"/></g>`,
		"fallback": "coolicons:running-bulk-round",
	});
}

export default Component;
