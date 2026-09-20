import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1mw_4bml.css';
import '../../css/x/xwynqtb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d1mw_4bml"/><path class="xwynqtb4o"/></g>`,
		"fallback": "reicon:square-bottom-up-filled",
	});
}

export default Component;
