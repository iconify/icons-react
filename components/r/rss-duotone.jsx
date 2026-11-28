import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1urx-b0j.css';
import '../../css/u/uhb5sdbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1urx-b0j secondary"/><path class="primary uhb5sdbgo"/></g>`,
		"fallback": "iconaut:rss-duotone",
	});
}

export default Component;
