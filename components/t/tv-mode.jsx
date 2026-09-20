import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lynb7gb5s.css';
import '../../css/e/ei9w4bc3h.css';
import '../../css/t/tbgu7rb4e.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="lynb7gb5s"/><path class="ei9w4bc3h"/><path class="tbgu7rb4e"/></g>`,
		"fallback": "system-uicons:tv-mode",
	});
}

export default Component;
