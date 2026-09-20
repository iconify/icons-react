import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/e/emog4qxnn.css';
import '../../css/j/jaexmsb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="dtl23o_xq"/><path clip-rule="evenodd" class="emog4qxnn"/><path class="jaexmsb9i"/></g>`,
		"fallback": "reicon:user-block2-filled",
	});
}

export default Component;
