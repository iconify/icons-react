import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/em6y05bsv.css';
import '../../css/b/brysc05un.css';
import '../../css/u/uvotcwg2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="em6y05bsv"/><path class="brysc05un"/><path class="uvotcwg2h"/></g>`,
		"fallback": "solar:magnifier-zoom-in-bold-duotone",
	});
}

export default Component;
