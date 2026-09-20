import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrk2mob-t.css';
import '../../css/j/j96t88b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rrk2mob-t"/><path class="j96t88b3m"/></g>`,
		"fallback": "reicon:volume-x-filled",
	});
}

export default Component;
