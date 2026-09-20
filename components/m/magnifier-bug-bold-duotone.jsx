import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/em6y05bsv.css';
import '../../css/g/gaiq7acaw.css';
import '../../css/d/dzwotfb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="em6y05bsv"/><path class="gaiq7acaw"/><path clip-rule="evenodd" class="dzwotfb7f"/></g>`,
		"fallback": "solar:magnifier-bug-bold-duotone",
	});
}

export default Component;
