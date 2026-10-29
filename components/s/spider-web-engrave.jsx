import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m4dq46b2l.css';
import '../../css/c/c40o4qbmy.css';
import '../../css/i/ihz715blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m4dq46b2l"/><path class="c40o4qbmy wm-shadow"/><path class="ihz715blo"/></g>`,
		"fallback": "withicons:spider-web-engrave",
	});
}

export default Component;
