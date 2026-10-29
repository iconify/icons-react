import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fa02m5btw.css';
import '../../css/s/s60nzevdd.css';
import '../../css/a/aurd6xbhd.css';
import '../../css/t/tygsh6hqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fa02m5btw wm-deco"/><path class="s60nzevdd wm-deco"/><path class="aurd6xbhd wm-deco"/><path class="tygsh6hqg wm-k"/></g>`,
		"fallback": "withicons:plane-blueprint",
	});
}

export default Component;
