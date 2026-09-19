import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cixd1bccw.css';
import '../../css/x/xdfmrpbgb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cixd1bccw"/><path class="xdfmrpbgb"/></g>`,
		"fallback": "bi:person-fill-add",
	});
}

export default Component;
