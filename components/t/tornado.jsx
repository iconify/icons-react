import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f6a-2rbfx.css';
import '../../css/e/eocdi3b5s.css';
import '../../css/l/lv22f_bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="f6a-2rbfx wm-shadow"/><path class="eocdi3b5s wm-shadow"/><path class="lv22f_bmy"/></g>`,
		"fallback": "withicons-brutal:tornado",
	});
}

export default Component;
