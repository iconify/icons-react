import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd7wexbuq.css';
import '../../css/l/lac7xcb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zd7wexbuq"/><path clip-rule="evenodd" class="lac7xcb2o"/></g>`,
		"fallback": "streamline-sharp-color:type-area-flat",
	});
}

export default Component;
