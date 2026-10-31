import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/przbox5lp.css';
import '../../css/o/o_3qdsr7f.css';
import '../../css/r/rc2cecb_x.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="przbox5lp"/><path class="o_3qdsr7f"/><path class="rc2cecb_x"/></g>`,
		"fallback": "cif:it",
	});
}

export default Component;
