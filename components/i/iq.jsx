import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flkqk9ded.css';
import '../../css/t/t1butsb-t.css';
import '../../css/c/c92sx-uey.css';
import '../../css/o/o-qfpp5_f.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flkqk9ded"/><path class="t1butsb-t"/><path class="c92sx-uey"/><path class="o-qfpp5_f"/></g>`,
		"fallback": "cif:iq",
	});
}

export default Component;
