import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xkbxa55eq.css';
import '../../css/j/j5_xo5blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xkbxa55eq"/><path class="j5_xo5blq"/></g>`,
		"fallback": "streamline-ultimate:notes-checklist-flip",
	});
}

export default Component;
