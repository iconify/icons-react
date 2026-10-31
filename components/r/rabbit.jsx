import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u14-gky4i.css';
import '../../css/o/okqpc_7qe.css';
import '../../css/l/la9f4lc2c.css';
import '../../css/e/enr0k2lak.css';
import '../../css/z/z4ue-qnje.css';
import '../../css/s/s0we3dbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u14-gky4i wm-shadow"/><path class="okqpc_7qe"/><path class="la9f4lc2c"/><path class="enr0k2lak"/><path class="z4ue-qnje"/><path class="s0we3dbpa"/></g>`,
		"fallback": "withicons-retro:rabbit",
	});
}

export default Component;
