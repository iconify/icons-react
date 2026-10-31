import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e-dkm4btg.css';
import '../../css/e/ewauubcgf.css';
import '../../css/h/hfppq3s8s.css';
import '../../css/e/e-xhqhbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e-dkm4btg wm-shadow"/><path class="ewauubcgf wm-shadow"/><path class="hfppq3s8s"/><path class="e-xhqhbop"/></g>`,
		"fallback": "withicons-brutal:microscope",
	});
}

export default Component;
