import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c4vdbmbtb.css';
import '../../css/x/xs5smy_1q.css';
import '../../css/n/nq3eg7a1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c4vdbmbtb wm-shadow"/><path class="wm-shadow xs5smy_1q"/><path class="nq3eg7a1o"/></g>`,
		"fallback": "withicons-brutal:list-tree",
	});
}

export default Component;
