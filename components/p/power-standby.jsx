import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3cv_cc6k.css';
import '../../css/j/jaih09bxv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3cv_cc6k"/><path class="jaih09bxv"/>`,
		"fallback": "cil:power-standby",
	});
}

export default Component;
