import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/szn17mbfx.css';
import '../../css/a/asht2jpqx.css';
import '../../css/b/bzvpj4gsv.css';
import '../../css/q/q2qfo-bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="szn17mbfx wm-shadow"/><path class="asht2jpqx"/><path class="bzvpj4gsv"/><path class="q2qfo-bxq"/></g>`,
		"fallback": "withicons-retro:sprout",
	});
}

export default Component;
