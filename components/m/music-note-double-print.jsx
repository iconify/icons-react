import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvubgbbtn.css';
import '../../css/u/u-dp037qb.css';
import '../../css/c/cii--0b6u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rvubgbbtn"/><path clip-rule="evenodd" class="u-dp037qb"/><path class="cii--0b6u"/></g>`,
		"fallback": "pepicons:music-note-double-print",
	});
}

export default Component;
