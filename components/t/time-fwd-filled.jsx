import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mg77tjbeb.css';
import '../../css/k/k7rwpu99c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mg77tjbeb"/><path class="k7rwpu99c"/></g>`,
		"fallback": "reicon:time-fwd-filled",
	});
}

export default Component;
