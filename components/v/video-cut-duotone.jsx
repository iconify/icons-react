import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dgnjdlbkt.css';
import '../../css/a/a71yqvb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dgnjdlbkt"/><path class="a71yqvb_v"/></g>`,
		"fallback": "reicon:video-cut-duotone",
	});
}

export default Component;
