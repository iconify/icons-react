import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thkmhfbxt.css';
import '../../css/x/x0h8p6wcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="thkmhfbxt"/><path class="x0h8p6wcc"/></g>`,
		"fallback": "reicon:phone-outgoing-filled",
	});
}

export default Component;
