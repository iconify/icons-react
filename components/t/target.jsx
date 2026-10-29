import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/z/z08dbetjo.css';
import '../../css/h/hl1atb0al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yw4fz_b6b"/><path class="wm-a z08dbetjo"/><path class="hl1atb0al wm-a"/></g>`,
		"fallback": "withicons:target",
	});
}

export default Component;
