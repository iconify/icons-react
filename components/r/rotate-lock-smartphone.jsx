import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jd10leb_w.css';
import '../../css/c/coxxv8aqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jd10leb_w"/><path class="coxxv8aqe"/></g>`,
		"fallback": "streamline-freehand:rotate-lock-smartphone",
	});
}

export default Component;
