import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l3w9o904c.css';
import '../../css/n/nw025lbnr.css';
import '../../css/d/dgmk__b2x.css';
import '../../css/d/d1v43fshw.css';
import '../../css/s/sqb3ibhos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l3w9o904c"/><path class="nw025lbnr wm-k"/><path class="dgmk__b2x wm-a"/><path class="d1v43fshw wm-k"/><path class="sqb3ibhos wm-a"/></g>`,
		"fallback": "withicons:package-open-sketch",
	});
}

export default Component;
