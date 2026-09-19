import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lip-g3b5r.css';
import '../../css/b/brh819bvq.css';
import '../../css/l/lyd-dmbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lip-g3b5r"/><path class="brh819bvq"/><path class="lyd-dmbrm"/></g>`,
		"fallback": "hugeicons:list-todo",
	});
}

export default Component;
