import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sz8e5mb4e.css';
import '../../css/s/snz3ceb8g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sz8e5mb4e"/><path class="snz3ceb8g"/></g>`,
		"fallback": "streamline-flex-color:phone-ringing-1",
	});
}

export default Component;
