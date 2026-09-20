import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g0zcltbvt.css';
import '../../css/y/yzfgrg9gk.css';
import '../../css/w/w4e85xboi.css';
import '../../css/n/n3upvwb4q.css';
import '../../css/c/c8eo9-b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g0zcltbvt"/><path clip-rule="evenodd" class="yzfgrg9gk"/><path clip-rule="evenodd" class="w4e85xboi"/><path clip-rule="evenodd" class="n3upvwb4q"/><path class="c8eo9-b5b"/></g>`,
		"fallback": "solar:playlist-minimalistic-2-bold",
	});
}

export default Component;
