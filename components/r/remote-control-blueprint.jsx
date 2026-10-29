import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uwv0wc6cy.css';
import '../../css/l/l78_ntbyf.css';
import '../../css/x/xim_sebyx.css';
import '../../css/j/jfct23bva.css';
import '../../css/w/wy4xecb3h.css';
import '../../css/a/akmrtkr0u.css';
import '../../css/e/exp-5t75r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="uwv0wc6cy wm-deco"/><path class="l78_ntbyf wm-deco"/><path class="wm-k xim_sebyx"/><path class="jfct23bva wm-a"/><path class="wm-s wy4xecb3h"/><path class="akmrtkr0u wm-a"/><path class="exp-5t75r wm-s"/></g>`,
		"fallback": "withicons:remote-control-blueprint",
	});
}

export default Component;
