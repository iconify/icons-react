import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oh053ab4q.css';
import '../../css/w/wl1f6ubih.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="oh053ab4q"/><path class="wl1f6ubih"/></g>`,
		"fallback": "streamline:strawberry",
	});
}

export default Component;
