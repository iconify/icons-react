import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l1ix_db4c.css';
import '../../css/c/ca4hfkhby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l1ix_db4c"/><path class="ca4hfkhby"/></g>`,
		"fallback": "nrk:list-check-expressive",
	});
}

export default Component;
