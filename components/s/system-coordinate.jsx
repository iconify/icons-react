import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evkvy0bzx.css';
import '../../css/r/rlb2h9boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="evkvy0bzx"/><path class="rlb2h9boa"/></g>`,
		"fallback": "tdesign:system-coordinate",
	});
}

export default Component;
