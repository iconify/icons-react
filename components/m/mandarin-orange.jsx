import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ozeoptb9e.css';
import '../../css/k/k6gyaxbcs.css';
import '../../css/w/wiytz24fd.css';
import '../../css/r/r-nr70vpq.css';
import '../../css/j/jeu8tlbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ozeoptb9e"/><path class="k6gyaxbcs wm-shine"/><path class="wiytz24fd wm-k"/><path class="r-nr70vpq wm-a"/><path class="jeu8tlbtr wm-deco"/></g>`,
		"fallback": "withicons-kawaii:mandarin-orange",
	});
}

export default Component;
