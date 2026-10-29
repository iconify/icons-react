import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jdkpgfdem.css';
import '../../css/h/h2b3rolij.css';
import '../../css/o/o-t2vm4xb.css';
import '../../css/p/pxnvek8pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jdkpgfdem"/><path class="h2b3rolij wm-a"/><path class="o-t2vm4xb wm-k"/><path class="pxnvek8pu wm-a"/></g>`,
		"fallback": "withicons:mail-sketch",
	});
}

export default Component;
