import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/z/z6q0ktb7m.css';
import '../../css/k/kws-eotaj.css';
import '../../css/b/bddr8xbir.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="z6q0ktb7m"/><path class="kws-eotaj"/><path class="bddr8xbir"/></g>`,
		"fallback": "skill-icons:ktor-dark",
	});
}

export default Component;
