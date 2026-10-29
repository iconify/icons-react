import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q86q9xbhy.css';
import '../../css/j/j2g44dbeo.css';
import '../../css/v/v3r7dcc8v.css';
import '../../css/v/vnrag9skx.css';
import '../../css/m/mozr6bcby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q86q9xbhy wm-k"/><path class="j2g44dbeo wm-a"/><path class="v3r7dcc8v wm-shadow"/><path class="vnrag9skx wm-k"/><path class="mozr6bcby wm-a"/></g>`,
		"fallback": "withicons:microphone-engrave",
	});
}

export default Component;
