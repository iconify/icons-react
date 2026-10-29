import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vwnokccxs.css';
import '../../css/z/ztkt3obdf.css';
import '../../css/e/eg29bkqqh.css';
import '../../css/e/e4g29s_et.css';
import '../../css/m/my7-6tyxm.css';
import '../../css/b/bbzc-ybpz.css';
import '../../css/j/j1dresbko.css';
import '../../css/g/gy6o54bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vwnokccxs wm-k"/><path class="wm-k ztkt3obdf"/><path class="eg29bkqqh wm-s"/><path class="e4g29s_et wm-s"/><path class="my7-6tyxm wm-s"/><path class="bbzc-ybpz wm-s"/><path class="j1dresbko wm-s"/><path class="gy6o54bwx wm-a"/></g>`,
		"fallback": "withicons:satellite-sketch",
	});
}

export default Component;
