import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvid33bdo.css';
import '../../css/y/yea7dilqg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zvid33bdo"/><path class="yea7dilqg"/></g>`,
		"fallback": "bi:minecart-loaded",
	});
}

export default Component;
