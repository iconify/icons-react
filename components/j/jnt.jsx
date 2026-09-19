import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c_q-mnb_e.css';
import '../../css/u/u0zxb8b3u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="c_q-mnb_e"/><path class="u0zxb8b3u"/></g>`,
		"fallback": "cryptocurrency-color:jnt",
	});
}

export default Component;
