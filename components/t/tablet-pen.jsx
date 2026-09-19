import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b8foahb1z.css';
import '../../css/g/gr1b9bf-n.css';
import '../../css/j/j1c3e2h6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b8foahb1z"/><path class="gr1b9bf-n"/><path class="j1c3e2h6a"/></g>`,
		"fallback": "hugeicons:tablet-pen",
	});
}

export default Component;
