import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyxtxvbbl.css';
import '../../css/d/diom9iltf.css';
import '../../css/l/lkt0z6aco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fyxtxvbbl"/><path class="diom9iltf"/><path class="lkt0z6aco"/></g>`,
		"fallback": "hugeicons:jumpers",
	});
}

export default Component;
