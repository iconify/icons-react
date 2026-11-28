import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ggv9aq_fq.css';
import '../../css/e/e9x1kxy9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ggv9aq_fq secondary"/><path class="e9x1kxy9a primary"/></g>`,
		"fallback": "iconaut:sofa-duotone",
	});
}

export default Component;
