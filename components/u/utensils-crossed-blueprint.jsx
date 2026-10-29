import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rh1eyibzr.css';
import '../../css/h/ha_bwsbod.css';
import '../../css/h/h_mvzq5gb.css';
import '../../css/n/nqm0ahbxr.css';
import '../../css/h/hix866bpb.css';
import '../../css/l/lunrs4s0q.css';
import '../../css/x/xeh4zcbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rh1eyibzr wm-deco"/><path class="ha_bwsbod wm-deco"/><path class="h_mvzq5gb wm-deco"/><path class="nqm0ahbxr wm-k"/><path class="hix866bpb wm-a"/><path class="lunrs4s0q wm-k"/><path class="wm-a xeh4zcbtt"/></g>`,
		"fallback": "withicons:utensils-crossed-blueprint",
	});
}

export default Component;
