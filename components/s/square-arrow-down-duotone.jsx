import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-_1ozgrf.css';
import '../../css/i/ivih9abcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-_1ozgrf"/><path class="ivih9abcb"/></g>`,
		"fallback": "reicon:square-arrow-down-duotone",
	});
}

export default Component;
