import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1vcoot1c.css';
import '../../css/b/b2ast7ugh.css';
import '../../css/f/ftjw_jb1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q1vcoot1c"/><path class="b2ast7ugh"/><path clip-rule="evenodd" class="ftjw_jb1r"/></g>`,
		"fallback": "healthicons:thyroid-outline",
	});
}

export default Component;
