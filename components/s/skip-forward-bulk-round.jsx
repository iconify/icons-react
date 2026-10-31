import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bm5ylen5b.css';
import '../../css/f/fwp9lvbrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bm5ylen5b"/><path class="fwp9lvbrl"/></g>`,
		"fallback": "coolicons:skip-forward-bulk-round",
	});
}

export default Component;
