import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4_qs971a.css';
import '../../css/u/urgfwxboa.css';
import '../../css/s/sfanizbyl.css';
import '../../css/p/pr2tmsbpy.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';
import '../../css/h/hwzxxondw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4_qs971a"/><path class="urgfwxboa"/><path class="sfanizbyl"/><path class="pr2tmsbpy"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><path class="hwzxxondw"/></g>`,
		"fallback": "openmoji:last-quarter-moon",
	});
}

export default Component;
