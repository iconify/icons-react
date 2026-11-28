import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tmcsu34on.css';
import '../../css/f/f-sj_lb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tmcsu34on"/><path class="f-sj_lb2a primary"/></g>`,
		"fallback": "iconaut:mastodon-duotone",
	});
}

export default Component;
