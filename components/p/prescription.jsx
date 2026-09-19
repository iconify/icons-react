import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hg17gpbhr.css';
import '../../css/y/ytdihq81v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hg17gpbhr"/><path class="ytdihq81v"/></g>`,
		"fallback": "bi:prescription",
	});
}

export default Component;
