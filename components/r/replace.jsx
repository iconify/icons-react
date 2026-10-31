import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kszlm5b1i.css';
import '../../css/i/iu0urbcsj.css';
import '../../css/l/l4-9yms_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kszlm5b1i wm-shadow"/><path class="iu0urbcsj"/><path class="l4-9yms_m"/></g>`,
		"fallback": "withicons-retro:replace",
	});
}

export default Component;
