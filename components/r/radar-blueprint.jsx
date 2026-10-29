import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a1k5gcctw.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/p/p6qte910m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="a1k5gcctw wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="p6qte910m"/></g>`,
		"fallback": "withicons:radar-blueprint",
	});
}

export default Component;
