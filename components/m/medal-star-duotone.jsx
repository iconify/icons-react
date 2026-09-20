import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rft11db8o.css';
import '../../css/c/c-thefu3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rft11db8o"/><path clip-rule="evenodd" class="c-thefu3h"/></g>`,
		"fallback": "reicon:medal-star-duotone",
	});
}

export default Component;
