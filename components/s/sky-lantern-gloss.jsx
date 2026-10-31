import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bttq49ywc.css';
import '../../css/q/qc_3683um.css';
import '../../css/j/jkreibv-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bttq49ywc wm-k"/><path class="qc_3683um wm-a"/><path class="jkreibv-q wm-deco"/></g>`,
		"fallback": "withicons:sky-lantern-gloss",
	});
}

export default Component;
