import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5cru4-aw.css';
import '../../css/q/qncg2i_ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b5cru4-aw"/><path clip-rule="evenodd" class="qncg2i_ta"/></g>`,
		"fallback": "reicon:kaaba",
	});
}

export default Component;
