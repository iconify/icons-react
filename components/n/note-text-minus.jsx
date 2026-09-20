import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v84j2_yqf.css';
import '../../css/r/rtfx4bcjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v84j2_yqf"/><path clip-rule="evenodd" class="rtfx4bcjn"/></g>`,
		"fallback": "majesticons:note-text-minus",
	});
}

export default Component;
