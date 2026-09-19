import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h3mfmnqok.css';
import '../../css/l/lsicvac8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="h3mfmnqok"/><path class="lsicvac8v"/></g>`,
		"fallback": "iconamoon:unavailable-duotone",
	});
}

export default Component;
