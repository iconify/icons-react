import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s1v13vbfl.css';
import '../../css/r/rr6xnxotj.css';
import '../../css/i/i8641g8no.css';
import '../../css/h/hpifajrwq.css';
import '../../css/s/srr6u-d7l.css';
import '../../css/d/drzgstbaa.css';
import '../../css/a/aj486vrwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s1v13vbfl"/><path class="rr6xnxotj wm-k"/><path class="i8641g8no wm-a"/><path class="hpifajrwq wm-s"/><path class="srr6u-d7l wm-k"/><path class="drzgstbaa wm-a"/><path class="aj486vrwt wm-s"/></g>`,
		"fallback": "withicons:package-x-sketch",
	});
}

export default Component;
