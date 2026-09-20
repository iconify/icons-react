import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xp5o1gbzm.css';
import '../../css/s/sz4l6qevc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xp5o1gbzm"/><path class="sz4l6qevc"/></g>`,
		"fallback": "streamline-sharp-color:megaphone-2-flat",
	});
}

export default Component;
