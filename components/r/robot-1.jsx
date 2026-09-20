import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-iz2rbnt.css';
import '../../css/b/bt-mbabug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-iz2rbnt"/><path class="bt-mbabug"/></g>`,
		"fallback": "tdesign:robot-1",
	});
}

export default Component;
