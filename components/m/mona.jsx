import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfs1s7b_q.css';
import '../../css/u/uu8g4js_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lfs1s7b_q"/><path class="uu8g4js_x"/></g>`,
		"fallback": "cryptocurrency-color:mona",
	});
}

export default Component;
