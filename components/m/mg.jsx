import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l88qm1qag.css';
import '../../css/n/nr17jwbql.css';
import '../../css/g/gm8f9gbil.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l88qm1qag"/><path class="nr17jwbql"/><path class="gm8f9gbil"/></g>`,
		"fallback": "cif:mg",
	});
}

export default Component;
