import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hzc3obabq.css';
import '../../css/l/l06z5ubsp.css';
import '../../css/g/gk74dmlzv.css';
import '../../css/a/av-c1ubeh.css';
import '../../css/p/p_p-pjb8n.css';
import '../../css/z/zfnx1hbxp.css';
import '../../css/e/ejxdh50qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hzc3obabq wm-deco"/><path class="l06z5ubsp wm-deco"/><path class="gk74dmlzv wm-deco"/><path class="av-c1ubeh wm-k"/><path class="p_p-pjb8n wm-s"/><path class="wm-k zfnx1hbxp"/><path class="ejxdh50qj wm-s"/></g>`,
		"fallback": "withicons:volume-off-blueprint",
	});
}

export default Component;
