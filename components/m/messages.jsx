import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uo4ezuigs.css';
import '../../css/u/uvfsuccod.css';
import '../../css/r/rz9impb_b.css';
import '../../css/m/m4d-on-2j.css';
import '../../css/c/c37la7upp.css';
import '../../css/m/my-h7bbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uo4ezuigs wm-shadow"/><path class="uvfsuccod"/><path class="rz9impb_b"/><path class="m4d-on-2j"/><path class="c37la7upp"/><path class="my-h7bbyr"/></g>`,
		"fallback": "withicons-retro:messages",
	});
}

export default Component;
