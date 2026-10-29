import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q4uvtbuiq.css';
import '../../css/w/w88s1ac1i.css';
import '../../css/b/b53s4jezg.css';
import '../../css/q/qzce7cxmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="q4uvtbuiq wm-deco"/><path class="w88s1ac1i wm-deco"/><path class="b53s4jezg wm-k"/><path class="qzce7cxmc wm-a"/></g>`,
		"fallback": "withicons:marigold-blueprint",
	});
}

export default Component;
