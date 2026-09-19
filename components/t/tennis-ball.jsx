import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qbbx1sbmp.css';
import '../../css/s/s2ug4_b9s.css';
import '../../css/b/bnkyxhv3h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qbbx1sbmp"/><path class="s2ug4_b9s"/><path class="bnkyxhv3h"/></g>`,
		"fallback": "at-icons:tennis-ball",
	});
}

export default Component;
