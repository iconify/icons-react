import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/p/p6xm5x-rc.css';
import '../../css/u/upr2r56ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="p6xm5x-rc"/><path class="upr2r56ap"/></g>`,
		"fallback": "keyline-icons:terminal-asterisk-duotone",
	});
}

export default Component;
