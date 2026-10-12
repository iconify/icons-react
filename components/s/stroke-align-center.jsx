import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k__e5xjss.css';
import '../../css/r/r-_q9otsx.css';
import '../../css/y/yaa1odzmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k__e5xjss"/><path class="r-_q9otsx"/><path class="yaa1odzmw"/></g>`,
		"fallback": "andrsrxn:stroke-align-center",
	});
}

export default Component;
