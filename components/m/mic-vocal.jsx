import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oa634ac1q.css';
import '../../css/k/kc_868n2j.css';
import '../../css/s/suq084bta.css';
import '../../css/h/h823pab0p.css';
import '../../css/s/s77xfwb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oa634ac1q wm-shadow"/><path class="kc_868n2j"/><path class="suq084bta"/><path class="h823pab0p"/><path class="s77xfwb_v"/></g>`,
		"fallback": "withicons-retro:mic-vocal",
	});
}

export default Component;
