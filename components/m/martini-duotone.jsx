import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqzb8um5l.css';
import '../../css/y/ytfymac3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rqzb8um5l secondary"/><path class="primary ytfymac3h"/></g>`,
		"fallback": "iconaut:martini-duotone",
	});
}

export default Component;
