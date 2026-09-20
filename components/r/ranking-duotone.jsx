import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwxnr4v8i.css';
import '../../css/z/zd8j4abwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fwxnr4v8i"/><path class="zd8j4abwt"/></g>`,
		"fallback": "reicon:ranking-duotone",
	});
}

export default Component;
