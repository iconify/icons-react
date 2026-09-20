import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_u1o-blq.css';
import '../../css/u/ud6_-2m2a.css';
import '../../css/u/ufo48bitx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i_u1o-blq"/><path class="ud6_-2m2a"/><path class="ufo48bitx"/></g>`,
		"fallback": "reicon:smart-speaker-filled",
	});
}

export default Component;
