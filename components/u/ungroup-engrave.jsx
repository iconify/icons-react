import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y08lrpbvo.css';
import '../../css/i/ihus8nt9r.css';
import '../../css/d/dpl7m5bka.css';
import '../../css/p/pfgi2nbvf.css';
import '../../css/w/wrc723bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k y08lrpbvo"/><path class="ihus8nt9r wm-a"/><path class="dpl7m5bka wm-shadow"/><path class="pfgi2nbvf wm-k"/><path class="wm-a wrc723bxq"/></g>`,
		"fallback": "withicons:ungroup-engrave",
	});
}

export default Component;
