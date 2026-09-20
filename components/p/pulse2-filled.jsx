import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8-5v_0po.css';
import '../../css/x/xuuek129w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z8-5v_0po"/><path class="xuuek129w"/></g>`,
		"fallback": "reicon:pulse2-filled",
	});
}

export default Component;
