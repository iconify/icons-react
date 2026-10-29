import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pjfvu7rlw.css';
import '../../css/b/bxjv56brc.css';
import '../../css/j/jdk8orm8z.css';
import '../../css/y/y822yac6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="pjfvu7rlw wm-deco"/><path class="bxjv56brc wm-deco"/><path class="jdk8orm8z"/><path class="y822yac6q"/></g>`,
		"fallback": "withicons:maximize-2-blueprint",
	});
}

export default Component;
