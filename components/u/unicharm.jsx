import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/okhwmcb0f.css';
import '../../css/v/v2bckkbfc.css';
import '../../css/t/t3uq51uee.css';

const viewBox = {"width":1595,"height":1596};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="okhwmcb0f"/><path class="v2bckkbfc"/><path class="t3uq51uee"/></g>`,
		"fallback": "thesvg:unicharm",
	});
}

export default Component;
