import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/x/x24pylx4h.css';
import '../../css/g/gatvf2ajg.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="x24pylx4h"/><path class="gatvf2ajg"/></g>`,
		"fallback": "system-uicons:unarchive",
	});
}

export default Component;
