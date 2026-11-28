import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/guhitdb5p.css';
import '../../css/w/w2ax0pkxd.css';
import '../../css/j/j62m-xfbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="guhitdb5p"/><path class="w2ax0pkxd"/><path class="j62m-xfbf"/></g>`,
		"fallback": "iconaut:vr-headset",
	});
}

export default Component;
