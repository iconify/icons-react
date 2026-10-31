import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hdg_egl-g.css';
import '../../css/k/k-crevbva.css';
import '../../css/g/gif5fhbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hdg_egl-g wm-shadow"/><path class="k-crevbva wm-shadow"/><path class="gif5fhbux"/></g>`,
		"fallback": "withicons-brutal:radio-tower",
	});
}

export default Component;
