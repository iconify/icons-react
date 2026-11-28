import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibccrtbtg.css';
import '../../css/n/nkrmlp40c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ibccrtbtg secondary"/><path class="nkrmlp40c primary"/></g>`,
		"fallback": "iconaut:phi-duotone",
	});
}

export default Component;
