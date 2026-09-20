import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8pnsgr_o.css';
import '../../css/j/jp0lapb1e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8pnsgr_o"/><path clip-rule="evenodd" class="jp0lapb1e"/></g>`,
		"fallback": "streamline-flex-color:phone-ringing-1-flat",
	});
}

export default Component;
