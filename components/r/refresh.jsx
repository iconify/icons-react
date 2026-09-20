import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/mbrj2bc1v.css';
import '../../css/g/giiskrsjx.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="mbrj2bc1v"/><path class="giiskrsjx"/></g>`,
		"fallback": "system-uicons:refresh",
	});
}

export default Component;
