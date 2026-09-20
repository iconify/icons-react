import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwl3y7bsu.css';
import '../../css/i/ixw0pbkoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kwl3y7bsu"/><path class="ixw0pbkoy"/></g>`,
		"fallback": "reicon:suitcase-duotone",
	});
}

export default Component;
