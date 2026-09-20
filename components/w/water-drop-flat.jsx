import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-8685bkx.css';
import '../../css/i/ii9ov8xwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-8685bkx"/><path clip-rule="evenodd" class="ii9ov8xwu"/></g>`,
		"fallback": "streamline-sharp-color:water-drop-flat",
	});
}

export default Component;
