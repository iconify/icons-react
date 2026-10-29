import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/al1-8xbyf.css';
import '../../css/b/bxjv56brc.css';
import '../../css/d/d0pvnoz4e.css';
import '../../css/x/xmrd7mjdn.css';
import '../../css/x/xwa576bbm.css';
import '../../css/m/mhcd6s9cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="al1-8xbyf wm-deco"/><path class="bxjv56brc wm-deco"/><path class="d0pvnoz4e wm-k"/><path class="wm-a xmrd7mjdn"/><path class="wm-k xwa576bbm"/><path class="mhcd6s9cd wm-a"/></g>`,
		"fallback": "withicons:redo-blueprint",
	});
}

export default Component;
