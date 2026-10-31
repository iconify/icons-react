import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pldw6rwea.css';
import '../../css/t/t0ir-1d4u.css';
import '../../css/x/xkzwg9lbd.css';
import '../../css/h/ht4udxt6z.css';
import '../../css/x/xzeab9b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pldw6rwea wm-shadow"/><path class="t0ir-1d4u wm-shadow"/><path class="xkzwg9lbd"/><path class="ht4udxt6z"/><path class="wm-s xzeab9b2p"/></g>`,
		"fallback": "withicons-brutal:smartphone-charging",
	});
}

export default Component;
