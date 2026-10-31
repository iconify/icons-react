import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqefncc1k.css';
import '../../css/s/svuk72b3v.css';
import '../../css/p/pqjxqrb7n.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cqefncc1k"/><path class="svuk72b3v"/><path class="pqjxqrb7n"/></g>`,
		"fallback": "cif:lb",
	});
}

export default Component;
