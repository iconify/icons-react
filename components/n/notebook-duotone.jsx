import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ocb1utols.css';
import '../../css/j/j77j76qtm.css';
import '../../css/w/wmsenj05l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ocb1utols"/><path clip-rule="evenodd" class="j77j76qtm"/><path class="wmsenj05l"/></g>`,
		"fallback": "reicon:notebook-duotone",
	});
}

export default Component;
