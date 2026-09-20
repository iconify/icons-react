import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glykitb_e.css';
import '../../css/o/oe-bndb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="glykitb_e"/><path class="oe-bndb_t"/></g>`,
		"fallback": "reicon:location-filled",
	});
}

export default Component;
