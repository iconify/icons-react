import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cd-w4tbuq.css';
import '../../css/k/kf39jph-w.css';
import '../../css/g/gpyurzb-c.css';
import '../../css/r/r0502pb9f.css';
import '../../css/p/ponhs01dq.css';
import '../../css/j/jju-pubul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cd-w4tbuq wm-shadow"/><path class="kf39jph-w"/><path class="gpyurzb-c"/><path class="r0502pb9f"/><path class="ponhs01dq"/><path class="jju-pubul"/></g>`,
		"fallback": "withicons-retro:sticky-note",
	});
}

export default Component;
