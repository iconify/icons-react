import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m9zlor0uo.css';
import '../../css/t/trao390lb.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m9zlor0uo"/><path class="trao390lb"/></g>`,
		"fallback": "cif:lv",
	});
}

export default Component;
