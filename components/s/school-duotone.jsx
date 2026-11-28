import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ilh8-5b6w.css';
import '../../css/x/xmbn-7bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ilh8-5b6w secondary"/><path class="primary xmbn-7bwi"/></g>`,
		"fallback": "iconaut:school-duotone",
	});
}

export default Component;
