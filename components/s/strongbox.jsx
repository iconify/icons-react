import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/el2l9w6ms.css';
import '../../css/b/bv3_8-wev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="el2l9w6ms"/><path class="bv3_8-wev"/></g>`,
		"fallback": "reicon:strongbox",
	});
}

export default Component;
