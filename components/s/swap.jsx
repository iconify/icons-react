import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/mq6hjubga.css';
import '../../css/i/i6zz6ccrg.css';
import '../../css/j/jztr7pbms.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="mq6hjubga"/><path class="i6zz6ccrg"/><path class="jztr7pbms"/></g>`,
		"fallback": "system-uicons:swap",
	});
}

export default Component;
