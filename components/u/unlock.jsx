import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qxks-ibzr.css';
import '../../css/k/kh79f8giu.css';
import '../../css/o/olut8cbbc.css';
import '../../css/w/wszrq55nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qxks-ibzr wm-shadow"/><path class="kh79f8giu"/><path class="olut8cbbc"/><path class="wszrq55nb"/></g>`,
		"fallback": "withicons-retro:unlock",
	});
}

export default Component;
