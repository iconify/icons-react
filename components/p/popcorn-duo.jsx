import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gnhf0cczt.css';
import '../../css/u/uzb644j9v.css';
import '../../css/t/tyl_u5bcc.css';
import '../../css/y/y9gz_6bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gnhf0cczt"/><path class="uzb644j9v wm-a"/><path class="tyl_u5bcc wm-a"/><path class="y9gz_6bcp"/></g>`,
		"fallback": "withicons:popcorn-duo",
	});
}

export default Component;
