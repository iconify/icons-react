import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qgxegmk8e.css';
import '../../css/o/o45l8fdzd.css';
import '../../css/s/s36rkybwm.css';
import '../../css/m/mqwqc8t2r.css';
import '../../css/q/qe6t8ub-i.css';
import '../../css/k/k8r-r3bjz.css';
import '../../css/e/evlaolbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qgxegmk8e wm-deco"/><path class="o45l8fdzd wm-deco"/><path class="s36rkybwm wm-deco"/><path class="mqwqc8t2r wm-k"/><path class="qe6t8ub-i wm-a"/><path class="k8r-r3bjz wm-s"/><path class="evlaolbwo wm-k"/></g>`,
		"fallback": "withicons:paisley-blueprint",
	});
}

export default Component;
