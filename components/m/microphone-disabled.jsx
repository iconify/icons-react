import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/e/eo-l1bb2w.css';
import '../../css/g/gn023qjry.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="eo-l1bb2w"/><path class="gn023qjry"/></g>`,
		"fallback": "system-uicons:microphone-disabled",
	});
}

export default Component;
