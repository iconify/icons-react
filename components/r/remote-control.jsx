import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q83zy2bcw.css';
import '../../css/x/x8j45_s5h.css';
import '../../css/w/wk_ib881r.css';
import '../../css/m/m5jj0fbow.css';
import '../../css/n/n4zxwablo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q83zy2bcw wm-k"/><path class="wm-k x8j45_s5h"/><path class="wk_ib881r"/><path class="m5jj0fbow"/><path class="n4zxwablo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:remote-control",
	});
}

export default Component;
