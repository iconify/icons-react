import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/huactvo1o.css';
import '../../css/h/h97vn6b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="huactvo1o"/><path clip-rule="evenodd" class="h97vn6b6s"/></g>`,
		"fallback": "streamline-sharp-color:recycle-bin-2-flat",
	});
}

export default Component;
