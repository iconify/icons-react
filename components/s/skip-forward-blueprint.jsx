import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zmbsi_bwd.css';
import '../../css/u/uhhdb_4na.css';
import '../../css/x/xuuhzvbpt.css';
import '../../css/w/wsgjttzmk.css';
import '../../css/v/vmnr9nb3m.css';
import '../../css/a/ai6g01b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zmbsi_bwd"/><path class="uhhdb_4na wm-deco"/><path class="wm-deco xuuhzvbpt"/><path class="wm-k wsgjttzmk"/><path class="vmnr9nb3m wm-a"/><path class="ai6g01b2a wm-a"/></g>`,
		"fallback": "withicons:skip-forward-blueprint",
	});
}

export default Component;
