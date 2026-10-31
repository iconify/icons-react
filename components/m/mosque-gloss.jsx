import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eo72fgzbg.css';
import '../../css/w/wasvw5btm.css';
import '../../css/w/w3adtxkdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="eo72fgzbg wm-k"/><path class="wasvw5btm wm-k"/><path class="w3adtxkdl wm-s"/></g>`,
		"fallback": "withicons:mosque-gloss",
	});
}

export default Component;
