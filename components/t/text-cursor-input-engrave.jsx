import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yq5-eix0m.css';
import '../../css/r/r01u23bzh.css';
import '../../css/n/n7_wv_bsx.css';
import '../../css/a/a7not2p8q.css';
import '../../css/e/e-x1c4yrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yq5-eix0m"/><path class="r01u23bzh wm-a"/><path class="n7_wv_bsx wm-shadow"/><path class="a7not2p8q wm-k"/><path class="e-x1c4yrw wm-a"/></g>`,
		"fallback": "withicons:text-cursor-input-engrave",
	});
}

export default Component;
