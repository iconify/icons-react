import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcixzjbbg.css';
import '../../css/q/qm1os7wyx.css';
import '../../css/l/llumy86rg.css';
import '../../css/b/br4x3j_5c.css';

const viewBox = {"width":280,"height":110};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mcixzjbbg"/><path class="qm1os7wyx"/><path class="llumy86rg"/><path class="br4x3j_5c"/></g>`,
		"fallback": "thesvg-color:standard-chartered",
	});
}

export default Component;
