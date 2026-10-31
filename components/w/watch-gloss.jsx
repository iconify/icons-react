import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/ds6iuybup.css';
import '../../css/i/iifkqexgr.css';
import '../../css/r/r0hj1ob5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ds6iuybup wm-k"/><path class="iifkqexgr wm-k"/><path class="r0hj1ob5p wm-a"/></g>`,
		"fallback": "withicons:watch-gloss",
	});
}

export default Component;
