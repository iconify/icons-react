import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l0_ma0bfq.css';
import '../../css/v/vyu7oygnb.css';
import '../../css/s/sgrqeknne.css';
import '../../css/d/d-q6e3btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l0_ma0bfq wm-shadow"/><path class="vyu7oygnb wm-shadow"/><path class="sgrqeknne"/><path class="d-q6e3btr"/></g>`,
		"fallback": "withicons-brutal:laptop",
	});
}

export default Component;
