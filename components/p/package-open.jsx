import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c4101lbrv.css';
import '../../css/q/qgeu3-b5w.css';
import '../../css/i/iyomzbcra.css';
import '../../css/v/v1uy6i-ya.css';
import '../../css/y/y34dlep5s.css';
import '../../css/t/t73t6lj2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c4101lbrv wm-shadow"/><path class="qgeu3-b5w"/><path class="iyomzbcra"/><path class="v1uy6i-ya"/><path class="y34dlep5s"/><path class="t73t6lj2y"/></g>`,
		"fallback": "withicons-retro:package-open",
	});
}

export default Component;
