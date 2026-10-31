import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/t/tl9trdpfa.css';
import '../../css/p/p-_x0dqhu.css';
import '../../css/d/di0k2ybam.css';
import '../../css/o/o79munz1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="tl9trdpfa"/><path class="p-_x0dqhu"/><path class="di0k2ybam"/><path class="o79munz1x"/></g>`,
		"fallback": "withicons-retro:logs",
	});
}

export default Component;
