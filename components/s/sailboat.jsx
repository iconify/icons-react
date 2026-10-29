import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rju07pb-u.css';
import '../../css/j/jvu317s8j.css';
import '../../css/l/lwbuswb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rju07pb-u wm-k"/><path class="jvu317s8j wm-a"/><path class="lwbuswb7o"/></g>`,
		"fallback": "withicons-bauhaus:sailboat",
	});
}

export default Component;
