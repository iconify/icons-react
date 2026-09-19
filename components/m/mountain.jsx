import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xmbbiopxh.css';
import '../../css/m/m72evjb7g.css';
import '../../css/u/u5w6i_b9t.css';
import '../../css/y/y618z5bsz.css';
import '../../css/j/j-xpb6lpy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="xmbbiopxh"/><path class="m72evjb7g"/><path class="u5w6i_b9t"/><path class="y618z5bsz"/><path class="j-xpb6lpy"/></g>`,
		"fallback": "icon-park:mountain",
	});
}

export default Component;
