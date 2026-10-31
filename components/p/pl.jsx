import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l0qtu8b-s.css';
import '../../css/a/ax9neccmn.css';

const viewBox = {"width":301,"height":189};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l0qtu8b-s"/><path class="ax9neccmn"/></g>`,
		"fallback": "cif:pl",
	});
}

export default Component;
