import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6u564dvt.css';
import '../../css/k/k9sd23bwb.css';
import '../../css/c/c92sx-uey.css';
import '../../css/s/sd82rxmkj.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6u564dvt"/><path class="k9sd23bwb"/><path class="c92sx-uey"/><path class="sd82rxmkj"/></g>`,
		"fallback": "cif:iq",
	});
}

export default Component;
