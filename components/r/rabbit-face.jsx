import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocgohyb-o.css';
import '../../css/g/gb8be6bqv.css';
import '../../css/h/h6-myqjhn.css';
import '../../css/f/fdoz4zhkc.css';
import '../../css/f/fasp-rvct.css';
import '../../css/d/d2j4ksbib.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocgohyb-o"/><path class="gb8be6bqv"/><path class="h6-myqjhn"/><path class="fdoz4zhkc"/><path class="fasp-rvct"/><path class="d2j4ksbib"/></g>`,
		"fallback": "fluent-emoji-flat:rabbit-face",
	});
}

export default Component;
