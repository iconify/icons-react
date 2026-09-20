import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0z04lmhk.css';
import '../../css/n/np24xwb0n.css';
import '../../css/u/upk2z-g3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g0z04lmhk"/><path class="np24xwb0n"/><path class="upk2z-g3m"/></g>`,
		"fallback": "mynaui:repeat",
	});
}

export default Component;
