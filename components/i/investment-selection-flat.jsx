import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqyvlrb2i.css';
import '../../css/q/qbw3x6okb.css';
import '../../css/u/uu0fhst3j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eqyvlrb2i"/><path clip-rule="evenodd" class="qbw3x6okb"/><path class="uu0fhst3j"/></g>`,
		"fallback": "streamline-color:investment-selection-flat",
	});
}

export default Component;
