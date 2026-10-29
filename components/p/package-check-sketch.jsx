import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oz0pntz8k.css';
import '../../css/y/y4hoogz6u.css';
import '../../css/l/l_63p0bjf.css';
import '../../css/p/px0ye32eu.css';
import '../../css/w/wmj1ohbnx.css';
import '../../css/o/ojv09k0as.css';
import '../../css/n/ni_2etb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oz0pntz8k"/><path class="wm-k y4hoogz6u"/><path class="l_63p0bjf wm-a"/><path class="px0ye32eu wm-s"/><path class="wm-k wmj1ohbnx"/><path class="ojv09k0as wm-a"/><path class="ni_2etb8r wm-s"/></g>`,
		"fallback": "withicons:package-check-sketch",
	});
}

export default Component;
