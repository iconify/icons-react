import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pzt6oybfe.css';
import '../../css/n/n8ujviqcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pzt6oybfe"/><path class="n8ujviqcl"/></g>`,
		"fallback": "solar:pipette-bold",
	});
}

export default Component;
