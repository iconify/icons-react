import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwqhhcbhm.css';
import '../../css/f/fov8assxj.css';
import '../../css/v/vall8hb6t.css';
import '../../css/b/bwi3webyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwqhhcbhm"/><path class="fov8assxj"/><path class="vall8hb6t"/><path class="bwi3webyw"/></g>`,
		"fallback": "hugeicons:text-superscript",
	});
}

export default Component;
