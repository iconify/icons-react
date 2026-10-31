import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gytzzwn0o.css';
import '../../css/r/rgxdrrb8l.css';
import '../../css/p/p_wu6crxh.css';
import '../../css/h/hu67qr54v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gytzzwn0o wm-shadow"/><path class="rgxdrrb8l"/><path class="p_wu6crxh"/><path class="hu67qr54v"/></g>`,
		"fallback": "withicons-retro:router",
	});
}

export default Component;
