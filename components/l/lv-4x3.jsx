import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qr9h2yblt.css';
import '../../css/i/ipqs2eb9b.css';
import '../../css/g/gm-qzl1jt.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qr9h2yblt"/><path class="ipqs2eb9b"/><path class="gm-qzl1jt"/></g>`,
		"fallback": "flag:lv-4x3",
	});
}

export default Component;
