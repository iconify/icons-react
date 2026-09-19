import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u-3e0irwq.css';
import '../../css/u/ub1f79cjh.css';
import '../../css/r/r6wfj1bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u-3e0irwq"/><path class="ub1f79cjh"/><path class="r6wfj1bre"/></g>`,
		"fallback": "hugeicons:meeting-room",
	});
}

export default Component;
