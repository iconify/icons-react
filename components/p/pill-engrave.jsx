import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ce6fhfb5v.css';
import '../../css/c/cstk1up5l.css';
import '../../css/c/cr6ik54-e.css';
import '../../css/t/tph8vb83n.css';
import '../../css/e/ewn913uqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ce6fhfb5v wm-k"/><path class="cstk1up5l wm-a"/><path class="cr6ik54-e wm-shadow"/><path class="tph8vb83n wm-k"/><path class="ewn913uqn wm-a"/></g>`,
		"fallback": "withicons:pill-engrave",
	});
}

export default Component;
