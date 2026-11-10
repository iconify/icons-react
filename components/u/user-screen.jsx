import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsp8oibje.css';
import '../../css/h/hm1y-ikxm.css';
import '../../css/o/o_zoskb9p.css';
import '../../css/j/jn66gsbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bsp8oibje"/><path class="hm1y-ikxm"/><path class="o_zoskb9p"/><path class="jn66gsbzu"/></g>`,
		"fallback": "andrsrxn:user-screen",
	});
}

export default Component;
