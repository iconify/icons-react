import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q79wn3bzm.css';
import '../../css/u/uggtecbyc.css';
import '../../css/z/zo1gxrb_w.css';
import '../../css/c/cbhmyuuzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q79wn3bzm wm-shadow"/><path class="uggtecbyc"/><path class="zo1gxrb_w"/><path class="cbhmyuuzh"/></g>`,
		"fallback": "withicons-retro:plane-landing",
	});
}

export default Component;
