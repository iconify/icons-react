import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/na6341tkq.css';
import '../../css/v/vf2ue5-ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="na6341tkq"/><path clip-rule="evenodd" class="vf2ue5-ql"/></g>`,
		"fallback": "streamline-sharp-color:user-sticker-square-flat",
	});
}

export default Component;
