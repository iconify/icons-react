import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ri7f70bsq.css';
import '../../css/b/bk5kklbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ri7f70bsq"/><path class="bk5kklbzd"/></g>`,
		"fallback": "reicon:streets-duotone",
	});
}

export default Component;
