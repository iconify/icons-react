import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsvy6uw5l.css';
import '../../css/z/zb5ct091p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bsvy6uw5l"/><path class="zb5ct091p"/></g>`,
		"fallback": "reicon:volume-slash-filled",
	});
}

export default Component;
