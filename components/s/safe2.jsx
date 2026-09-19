import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffxzoii6n.css';
import '../../css/s/s7s8mq5nj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ffxzoii6n"/><path class="s7s8mq5nj"/></g>`,
		"fallback": "bi:safe2",
	});
}

export default Component;
