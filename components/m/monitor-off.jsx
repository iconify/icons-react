import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k23j7_x9t.css';
import '../../css/j/js3as93ye.css';
import '../../css/q/q6xs2hb9n.css';
import '../../css/u/ureitbb2w.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k23j7_x9t wm-k"/><path class="js3as93ye wm-k"/><path class="q6xs2hb9n"/><path class="ureitbb2w"/><path class="ohtj0i3jo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:monitor-off",
	});
}

export default Component;
