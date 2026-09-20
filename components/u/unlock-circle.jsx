import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2sv84cqh.css';
import '../../css/h/hdq5bsedf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r2sv84cqh"/><path class="hdq5bsedf"/></g>`,
		"fallback": "streamline-freehand:unlock-circle",
	});
}

export default Component;
