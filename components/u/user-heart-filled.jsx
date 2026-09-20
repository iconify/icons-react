import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/suz-ffp0e.css';
import '../../css/w/ww331qbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="suz-ffp0e"/><path clip-rule="evenodd" class="ww331qbsr"/></g>`,
		"fallback": "reicon:user-heart-filled",
	});
}

export default Component;
