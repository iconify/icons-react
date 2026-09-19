import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnp73_ylh.css';
import '../../css/i/ik-womr_i.css';
import '../../css/i/i464ycb4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnp73_ylh"/><path class="ik-womr_i"/><path class="i464ycb4o"/></g>`,
		"fallback": "icon-park-outline:voice-message",
	});
}

export default Component;
