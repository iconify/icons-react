import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c09af7b7p.css';
import '../../css/r/rvt-gdn_n.css';
import '../../css/i/i4_81lnam.css';
import '../../css/y/ydodnz-lk.css';
import '../../css/n/n0h11s99a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c09af7b7p wm-k"/><path class="rvt-gdn_n wm-k"/><path class="i4_81lnam wm-s"/><path class="ydodnz-lk"/><path class="n0h11s99a wm-s"/></g>`,
		"fallback": "withicons-bauhaus:love-scroll",
	});
}

export default Component;
