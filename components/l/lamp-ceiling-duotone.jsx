import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk_b57b8m.css';
import '../../css/f/fb_x9zb8o.css';
import '../../css/q/qwetcybvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wk_b57b8m"/><path class="fb_x9zb8o"/><path class="qwetcybvx"/></g>`,
		"fallback": "lucide-extended:lamp-ceiling-duotone",
	});
}

export default Component;
