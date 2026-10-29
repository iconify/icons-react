import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k65hrfbvx.css';
import '../../css/e/e7esfuz-f.css';
import '../../css/w/wrvua4-5z.css';
import '../../css/x/xis2dw_-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k65hrfbvx wm-k"/><path class="e7esfuz-f wm-a"/><path class="wrvua4-5z"/><path class="xis2dw_-a"/></g>`,
		"fallback": "withicons-bauhaus:pandal",
	});
}

export default Component;
