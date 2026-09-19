import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-ciypbqr.css';
import '../../css/k/k6t_4l9kf.css';
import '../../css/b/bmpbwubqn.css';
import '../../css/w/wsa4hyrvz.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultPvNegative0)" class="cuyn6tgcc"><path class="f-ciypbqr"/><path clip-rule="evenodd" class="k6t_4l9kf"/><path class="bmpbwubqn"/><path clip-rule="evenodd" class="wsa4hyrvz"/></g><defs><clipPath id="healthiconsRdtResultPvNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:rdt-result-pv-negative",
	});
}

export default Component;
