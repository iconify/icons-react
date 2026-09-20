import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rp54qj1ec.css';
import '../../css/y/ynk-x0boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rp54qj1ec"/><path clip-rule="evenodd" class="ynk-x0boc"/></g>`,
		"fallback": "reicon:music-lib2-filled",
	});
}

export default Component;
