import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbdiycc1x.css';
import '../../css/r/r5tkf0myb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rbdiycc1x"/><path class="r5tkf0myb"/></g>`,
		"fallback": "bi:modem",
	});
}

export default Component;
