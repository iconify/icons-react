import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b5et55b8u.css';
import '../../css/z/z17pphbll.css';
import '../../css/u/uj006kbdm.css';
import '../../css/a/aiuujzw4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b5et55b8u wm-k"/><path class="wm-k z17pphbll"/><path class="uj006kbdm wm-s"/><path class="aiuujzw4g"/></g>`,
		"fallback": "withicons-bauhaus:ring-box",
	});
}

export default Component;
