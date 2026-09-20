import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hf5oswbse.css';
import '../../css/j/jied2xsjb.css';
import '../../css/v/vdv47vfaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hf5oswbse"/><path class="jied2xsjb"/><path class="vdv47vfaw"/></g>`,
		"fallback": "keyline-icons:test-tube-duotone",
	});
}

export default Component;
