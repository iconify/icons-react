import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8km-184w.css';
import '../../css/f/fp9ai6rww.css';
import '../../css/x/x9yopfm_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8km-184w"/><path class="fp9ai6rww"/><path class="x9yopfm_z"/></g>`,
		"fallback": "reicon:smart-speaker2-filled",
	});
}

export default Component;
