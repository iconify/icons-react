import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r4ogsfbtl.css';
import '../../css/p/pymj67b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r4ogsfbtl"/><path class="pymj67b1h"/></g>`,
		"fallback": "reicon:more-h-duotone",
	});
}

export default Component;
