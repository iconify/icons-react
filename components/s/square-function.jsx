import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/h/h0vn7bjwb.css';
import '../../css/b/b1mxoy9vx.css';
import '../../css/p/pfdbmob0w.css';
import '../../css/l/lslrt22xa.css';
import '../../css/y/ykzbt_bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="h0vn7bjwb"/><path class="b1mxoy9vx"/><path class="pfdbmob0w"/><path class="lslrt22xa"/><path class="ykzbt_bef"/></g>`,
		"fallback": "withicons-retro:square-function",
	});
}

export default Component;
