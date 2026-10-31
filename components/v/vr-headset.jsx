import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b9jjwibop.css';
import '../../css/q/qbtwt8h2g.css';
import '../../css/d/d3o853lww.css';
import '../../css/t/tnssgcgfm.css';
import '../../css/u/uoi4civ0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b9jjwibop wm-shadow"/><path class="qbtwt8h2g"/><path class="d3o853lww"/><path class="tnssgcgfm"/><path class="uoi4civ0t"/></g>`,
		"fallback": "withicons-retro:vr-headset",
	});
}

export default Component;
