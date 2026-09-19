import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c7j56bc7s.css';
import '../../css/n/ng64o89lm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c7j56bc7s"/><path class="ng64o89lm"/></g>`,
		"fallback": "bi:passport-fill",
	});
}

export default Component;
