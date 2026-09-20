import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2strbb_c.css';
import '../../css/f/fh575-bvo.css';
import '../../css/i/ii_b03b1m.css';
import '../../css/r/rm-lboqdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="i2strbb_c"/><path class="fh575-bvo"/><path class="ii_b03b1m"/><path class="rm-lboqdq"/></g>`,
		"fallback": "lets-icons:tumer-duotone",
	});
}

export default Component;
