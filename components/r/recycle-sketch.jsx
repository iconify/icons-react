import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ck55j8b8a.css';
import '../../css/q/qib6t71cp.css';
import '../../css/l/lmo_-j63h.css';
import '../../css/w/wmvanjksm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ck55j8b8a wm-k"/><path class="qib6t71cp wm-a"/><path class="lmo_-j63h wm-k"/><path class="wm-a wmvanjksm"/></g>`,
		"fallback": "withicons:recycle-sketch",
	});
}

export default Component;
