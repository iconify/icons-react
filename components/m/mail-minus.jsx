import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/m2ywt9b9g.css';
import '../../css/a/ahcqjtj-v.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="m2ywt9b9g"/><path class="ahcqjtj-v"/></g>`,
		"fallback": "system-uicons:mail-minus",
	});
}

export default Component;
