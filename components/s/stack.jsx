import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wce015bsj.css';
import '../../css/k/kw_6k-b2z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wce015bsj"/><path class="kw_6k-b2z"/></g>`,
		"fallback": "bi:stack",
	});
}

export default Component;
