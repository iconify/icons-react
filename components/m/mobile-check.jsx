import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6oezyeac.css';
import '../../css/g/gm5t77b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6oezyeac"/><path class="gm5t77b-c"/></g>`,
		"fallback": "nrk:mobile-check",
	});
}

export default Component;
