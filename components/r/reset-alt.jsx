import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/v/vq3x8pbhc.css';
import '../../css/x/xy8ywpa0a.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="vq3x8pbhc"/><path class="xy8ywpa0a"/></g>`,
		"fallback": "system-uicons:reset-alt",
	});
}

export default Component;
