import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcdytdbkh.css';
import '../../css/c/c7ts7bbcv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bcdytdbkh"/><path class="c7ts7bbcv"/></g>`,
		"fallback": "bi:sign-no-left-turn-fill",
	});
}

export default Component;
