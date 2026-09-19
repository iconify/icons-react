import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsnor2bny.css';
import '../../css/b/b1itxrggd.css';
import '../../css/l/l2w4wwbeb.css';
import '../../css/r/r5wubrbkl.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xsnor2bny"/><path class="b1itxrggd"/><path class="l2w4wwbeb"/><path class="r5wubrbkl"/></g>`,
		"fallback": "cif:mu",
	});
}

export default Component;
