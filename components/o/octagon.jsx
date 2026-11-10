import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpzy42b1e.css';
import '../../css/u/uuijyebmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dpzy42b1e"/><path class="uuijyebmg"/></g>`,
		"fallback": "andrsrxn:octagon",
	});
}

export default Component;
