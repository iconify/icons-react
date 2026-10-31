import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqmci6hha.css';
import '../../css/u/uh3b_smmp.css';
import '../../css/j/jsr1-l15m.css';
import '../../css/e/er7jyj_iy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="kqmci6hha"/><path class="uh3b_smmp"/><path class="jsr1-l15m"/><path class="er7jyj_iy"/></g>`,
		"fallback": "iconito:mushroom",
	});
}

export default Component;
