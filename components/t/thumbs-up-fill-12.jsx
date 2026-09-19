import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eg1ohqnca.css';
import '../../css/l/lz-xrpy1h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eg1ohqnca"/><rect class="lz-xrpy1h"/></g>`,
		"fallback": "garden:thumbs-up-fill-12",
	});
}

export default Component;
