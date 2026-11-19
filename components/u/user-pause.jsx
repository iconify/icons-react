import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/v/vzkhs6b9b.css';
import '../../css/c/cp9yw3kis.css';
import '../../css/u/un4gwsbtp.css';
import '../../css/u/u70o1ubat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="vzkhs6b9b"/><path class="cp9yw3kis"/><path clip-rule="evenodd" class="un4gwsbtp"/><path class="u70o1ubat"/></g>`,
		"fallback": "andrsrxn:user-pause",
	});
}

export default Component;
