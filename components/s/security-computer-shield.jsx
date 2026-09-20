import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cpgy2mbct.css';
import '../../css/e/e5b98zs_u.css';
import '../../css/h/hm9_r3b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cpgy2mbct"/><path class="e5b98zs_u"/><path class="hm9_r3b6i"/></g>`,
		"fallback": "streamline-freehand-color:security-computer-shield",
	});
}

export default Component;
