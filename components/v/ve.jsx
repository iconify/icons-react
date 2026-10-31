import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2n2fpb7c.css';
import '../../css/d/d-lgzvbiv.css';
import '../../css/r/r8ryz1bom.css';
import '../../css/r/rgb_vnb-b.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d2n2fpb7c"/><path class="d-lgzvbiv"/><path class="r8ryz1bom"/><path class="rgb_vnb-b"/></g>`,
		"fallback": "cif:ve",
	});
}

export default Component;
