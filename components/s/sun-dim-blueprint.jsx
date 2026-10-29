import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rz_0dmblq.css';
import '../../css/b/bxjv56brc.css';
import '../../css/d/dzjkh2bst.css';
import '../../css/q/q42xo2b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rz_0dmblq wm-deco"/><path class="bxjv56brc wm-deco"/><path class="dzjkh2bst wm-k"/><path class="q42xo2b2p wm-a"/></g>`,
		"fallback": "withicons:sun-dim-blueprint",
	});
}

export default Component;
