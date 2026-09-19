import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ceso4vbxm.css';
import '../../css/c/cspqf9bxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ceso4vbxm"/><path class="cspqf9bxv"/></g>`,
		"fallback": "bi:newspaper",
	});
}

export default Component;
