import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq8g9xbna.css';
import '../../css/o/oh4h9qbyp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rq8g9xbna"/><path class="oh4h9qbyp"/></g>`,
		"fallback": "streamline-color:new-file-flat",
	});
}

export default Component;
