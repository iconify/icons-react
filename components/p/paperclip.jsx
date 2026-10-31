import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds779bbxw.css';
import '../../css/m/m1x5io3aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ds779bbxw wm-k"/><path class="m1x5io3aw wm-shine"/></g>`,
		"fallback": "withicons-lunar:paperclip",
	});
}

export default Component;
