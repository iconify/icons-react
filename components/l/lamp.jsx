import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sbwgn4yri.css';
import '../../css/o/osl6lvxqg.css';
import '../../css/a/aqz1ib_2h.css';
import '../../css/y/yf-fmbg7r.css';
import '../../css/z/zo1uq6brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sbwgn4yri wm-shadow"/><path class="osl6lvxqg"/><path class="aqz1ib_2h"/><path class="yf-fmbg7r"/><path class="zo1uq6brg"/></g>`,
		"fallback": "withicons-retro:lamp",
	});
}

export default Component;
