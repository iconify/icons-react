import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2m4hmvrr.css';
import '../../css/j/jd_e9cbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2m4hmvrr"/><path class="jd_e9cbfp"/></g>`,
		"fallback": "andrsrxn:touchpad-off",
	});
}

export default Component;
