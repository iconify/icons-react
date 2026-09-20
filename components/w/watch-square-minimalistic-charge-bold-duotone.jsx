import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fqtfdwbms.css';
import '../../css/e/e024s-boh.css';
import '../../css/x/x5ulqf2ar.css';
import '../../css/d/da1831clg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fqtfdwbms"/><path class="e024s-boh"/><path class="x5ulqf2ar"/><path class="da1831clg"/></g>`,
		"fallback": "solar:watch-square-minimalistic-charge-bold-duotone",
	});
}

export default Component;
