import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6344lbpb.css';
import '../../css/x/xdfmrpbgb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6344lbpb"/><path class="xdfmrpbgb"/></g>`,
		"fallback": "bi:person-fill-check",
	});
}

export default Component;
