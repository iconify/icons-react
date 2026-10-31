import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aq_dfdmdn.css';
import '../../css/m/m507fn5dq.css';
import '../../css/u/ufz4k47ac.css';
import '../../css/q/qslhfkn2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="aq_dfdmdn wm-shadow"/><path class="m507fn5dq wm-shadow"/><path class="ufz4k47ac"/><path class="qslhfkn2m"/></g>`,
		"fallback": "withicons-brutal:screwdriver",
	});
}

export default Component;
