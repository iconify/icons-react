import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wq_sky9vv.css';
import '../../css/w/w0aca8bue.css';
import '../../css/x/xkocfl-zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wq_sky9vv"/><path clip-rule="evenodd" class="w0aca8bue"/><path class="xkocfl-zq"/></g>`,
		"fallback": "reicon:smart-speaker-duotone",
	});
}

export default Component;
