import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h583f7c_x.css';
import '../../css/y/yckoiab1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h583f7c_x"/><path class="yckoiab1k"/></g>`,
		"fallback": "si:release-notes-duotone",
	});
}

export default Component;
