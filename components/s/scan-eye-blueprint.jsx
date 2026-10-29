import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r_ag4fbgb.css';
import '../../css/s/skyku6blw.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/c/chdm4boxh.css';
import '../../css/y/yjrq28frk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="r_ag4fbgb wm-deco"/><path class="skyku6blw wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="l9lv5_bcf wm-k"/><path class="chdm4boxh wm-a"/><path class="wm-a yjrq28frk"/></g>`,
		"fallback": "withicons:scan-eye-blueprint",
	});
}

export default Component;
