import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4r1zg5ul.css';
import '../../css/i/ita7t9bpp.css';
import '../../css/j/j7-_diniq.css';
import '../../css/b/bdxu0wqtq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j4r1zg5ul"/><path class="ita7t9bpp"/><path class="j7-_diniq"/><path class="bdxu0wqtq"/></g>`,
		"fallback": "streamline-color:nurse-assistant-emergency",
	});
}

export default Component;
