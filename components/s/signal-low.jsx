import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/c/c1-wzjpfx.css';
import '../../css/c/cc0j-4xhr.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="c1-wzjpfx"/><path class="cc0j-4xhr"/></g>`,
		"fallback": "system-uicons:signal-low",
	});
}

export default Component;
