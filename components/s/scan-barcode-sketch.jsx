import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jzynihb1h.css';
import '../../css/x/xruxbuhom.css';
import '../../css/w/wjgsuii2v.css';
import '../../css/y/yis2aibtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jzynihb1h wm-k"/><path class="wm-a xruxbuhom"/><path class="wjgsuii2v wm-k"/><path class="wm-a yis2aibtu"/></g>`,
		"fallback": "withicons:scan-barcode-sketch",
	});
}

export default Component;
