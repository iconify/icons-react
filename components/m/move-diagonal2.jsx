import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mos2f7kjq.css';
import '../../css/g/gg4mz1k_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mos2f7kjq"/><path class="gg4mz1k_b"/></g>`,
		"fallback": "hugeicons:move-diagonal2",
	});
}

export default Component;
