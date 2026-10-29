import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dyo429x_t.css';
import '../../css/u/uhc76--hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dyo429x_t"/><path class="uhc76--hq wm-a"/></g>`,
		"fallback": "withicons:shopping-bag",
	});
}

export default Component;
