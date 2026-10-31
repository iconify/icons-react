import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o--5ip_qe.css';
import '../../css/q/q5yl1ouih.css';
import '../../css/y/yuibxoz6p.css';
import '../../css/i/icd6n9bpa.css';

const viewBox = {"width":300,"height":187};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o--5ip_qe"/><path class="q5yl1ouih"/><path class="yuibxoz6p"/><path class="icd6n9bpa"/></g>`,
		"fallback": "cif:tg",
	});
}

export default Component;
