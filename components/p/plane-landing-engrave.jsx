import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wlgc_xbce.css';
import '../../css/t/tvvz7sbyy.css';
import '../../css/p/p51-u5b-l.css';
import '../../css/h/h3bpwcjgi.css';
import '../../css/u/u83h24b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wlgc_xbce wm-k"/><path class="tvvz7sbyy wm-a"/><path class="p51-u5b-l wm-shadow"/><path class="h3bpwcjgi wm-k"/><path class="u83h24b3i wm-a"/></g>`,
		"fallback": "withicons:plane-landing-engrave",
	});
}

export default Component;
