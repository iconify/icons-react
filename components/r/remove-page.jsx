import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mzi2vobfm.css';
import '../../css/y/ysqi2pc_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mzi2vobfm"/><path class="ysqi2pc_u"/></g>`,
		"fallback": "iconoir:remove-page",
	});
}

export default Component;
