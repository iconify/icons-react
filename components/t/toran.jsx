import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bce0lc-sb.css';
import '../../css/n/nh5ba4blo.css';
import '../../css/y/yxnj9mkmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bce0lc-sb wm-k"/><path class="nh5ba4blo wm-a"/><path class="yxnj9mkmk"/></g>`,
		"fallback": "withicons-bauhaus:toran",
	});
}

export default Component;
