import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zzz8dtmbq.css';
import '../../css/b/b6q474ute.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zzz8dtmbq"/><path class="b6q474ute"/></g>`,
		"fallback": "nrk:media-chromecast-2",
	});
}

export default Component;
