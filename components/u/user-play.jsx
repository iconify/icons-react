import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/v/vzkhs6b9b.css';
import '../../css/c/cp9yw3kis.css';
import '../../css/w/w2-rd0bxp.css';
import '../../css/j/j9l9mnfxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="vzkhs6b9b"/><path class="cp9yw3kis"/><path clip-rule="evenodd" class="w2-rd0bxp"/><path class="j9l9mnfxb"/></g>`,
		"fallback": "andrsrxn:user-play",
	});
}

export default Component;
