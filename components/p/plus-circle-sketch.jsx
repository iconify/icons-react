import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qgi8hqb5s.css';
import '../../css/f/frg6hh-gx.css';
import '../../css/d/dv0t7jb2h.css';
import '../../css/k/korl07bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qgi8hqb5s"/><path class="frg6hh-gx wm-a"/><path class="dv0t7jb2h wm-k"/><path class="korl07bdb wm-a"/></g>`,
		"fallback": "withicons:plus-circle-sketch",
	});
}

export default Component;
