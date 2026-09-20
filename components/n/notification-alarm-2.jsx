import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1o83u96m.css';
import '../../css/r/r343qthee.css';
import '../../css/f/fs8879b-p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o1o83u96m"/><path clip-rule="evenodd" class="r343qthee"/><path class="fs8879b-p"/></g>`,
		"fallback": "streamline-color:notification-alarm-2",
	});
}

export default Component;
