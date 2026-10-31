import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/reu6pobru.css';
import '../../css/s/szbjmuwxy.css';
import '../../css/f/fvw7vhbqz.css';
import '../../css/x/x097rxg-o.css';
import '../../css/q/q0xylnbuu.css';
import '../../css/y/ylm_sjy-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="reu6pobru wm-shadow"/><path class="szbjmuwxy"/><path class="fvw7vhbqz"/><path class="x097rxg-o"/><path class="q0xylnbuu"/><path class="ylm_sjy-b"/></g>`,
		"fallback": "withicons-retro:octagon-alert",
	});
}

export default Component;
