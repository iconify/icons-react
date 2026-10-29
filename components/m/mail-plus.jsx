import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ydncdc8sq.css';
import '../../css/d/d4-92dm9n.css';
import '../../css/d/doh8v6wzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k ydncdc8sq"/><path class="d4-92dm9n"/><path class="doh8v6wzz wm-s"/></g>`,
		"fallback": "withicons-bauhaus:mail-plus",
	});
}

export default Component;
