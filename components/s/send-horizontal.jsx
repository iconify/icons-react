import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o4bjcmbul.css';
import '../../css/z/zlg_u3b_t.css';
import '../../css/d/dc82hfbss.css';
import '../../css/i/ie3ykpgds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="o4bjcmbul wm-shadow"/><path class="wm-shadow zlg_u3b_t"/><path class="dc82hfbss"/><path class="ie3ykpgds"/></g>`,
		"fallback": "withicons-brutal:send-horizontal",
	});
}

export default Component;
