import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/pwbufu0tn.css';
import '../../css/r/r2x23jbua.css';
import '../../css/e/e9ikq1fsl.css';
import '../../css/o/oekovybdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="pwbufu0tn"/><path class="r2x23jbua"/><path class="e9ikq1fsl"/><path class="oekovybdw"/></g>`,
		"fallback": "streamline-sharp-color:virtual-reality",
	});
}

export default Component;
