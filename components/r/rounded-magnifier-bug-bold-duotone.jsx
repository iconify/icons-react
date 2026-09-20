import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fnsxu5bca.css';
import '../../css/d/dzwotfb7f.css';
import '../../css/e/em6y05bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fnsxu5bca"/><path clip-rule="evenodd" class="dzwotfb7f"/><path class="em6y05bsv"/></g>`,
		"fallback": "solar:rounded-magnifier-bug-bold-duotone",
	});
}

export default Component;
