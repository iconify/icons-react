import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib7p9gr-q.css';
import '../../css/y/ykhjhwb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ib7p9gr-q"/><path class="ykhjhwb0e"/></g>`,
		"fallback": "reicon:video-play-v-duotone",
	});
}

export default Component;
