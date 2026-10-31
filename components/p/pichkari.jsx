import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c43xod1_p.css';
import '../../css/p/pblhmn5is.css';
import '../../css/s/snmp3mbgc.css';
import '../../css/y/ybr8appkk.css';
import '../../css/s/sfup6u_uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="c43xod1_p wm-shadow"/><path class="pblhmn5is wm-shadow"/><path class="snmp3mbgc"/><path class="ybr8appkk"/><path class="sfup6u_uo wm-s"/></g>`,
		"fallback": "withicons-brutal:pichkari",
	});
}

export default Component;
