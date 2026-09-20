import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/suz-ffp0e.css';
import '../../css/o/o_0l1hoku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="suz-ffp0e"/><path clip-rule="evenodd" class="o_0l1hoku"/></g>`,
		"fallback": "reicon:user-check-filled",
	});
}

export default Component;
