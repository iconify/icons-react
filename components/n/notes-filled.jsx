import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x5cnljlba.css';
import '../../css/n/npevwbb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x5cnljlba"/><path class="npevwbb7h"/></g>`,
		"fallback": "reicon:notes-filled",
	});
}

export default Component;
