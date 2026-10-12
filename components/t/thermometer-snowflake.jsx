import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wet-l_bgq.css';
import '../../css/h/h-bkn3dhm.css';
import '../../css/s/s709upb-l.css';
import '../../css/z/zre4kaccw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wet-l_bgq"/><path class="h-bkn3dhm"/><path class="s709upb-l"/><path class="zre4kaccw"/></g>`,
		"fallback": "andrsrxn:thermometer-snowflake",
	});
}

export default Component;
