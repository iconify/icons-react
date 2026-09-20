import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uhv6at1zf.css';
import '../../css/e/ewnc6ac2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uhv6at1zf"/><path class="ewnc6ac2s"/></g>`,
		"fallback": "solar:pill-bold-duotone",
	});
}

export default Component;
