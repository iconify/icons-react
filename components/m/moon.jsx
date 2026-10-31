import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sckqad0ff.css';
import '../../css/v/v-st8lanl.css';
import '../../css/j/js10n058p.css';
import '../../css/e/ey_b5rb0u.css';
import '../../css/a/a6f4mz_ky.css';
import '../../css/h/h8sx8htxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sckqad0ff wm-shadow"/><path class="v-st8lanl"/><path class="js10n058p"/><path class="ey_b5rb0u"/><path class="a6f4mz_ky"/><path class="h8sx8htxe"/></g>`,
		"fallback": "withicons-retro:moon",
	});
}

export default Component;
