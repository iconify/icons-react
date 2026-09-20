import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oqnd0gbxx.css';
import '../../css/i/iijh2bcez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oqnd0gbxx"/><path class="iijh2bcez"/></g>`,
		"fallback": "reicon:repeate-one-filled",
	});
}

export default Component;
