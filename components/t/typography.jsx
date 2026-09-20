import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z13jkwbug.css';
import '../../css/r/r25b-tj4p.css';
import '../../css/a/a3n9426do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z13jkwbug"/><path class="r25b-tj4p"/><path class="a3n9426do"/></g>`,
		"fallback": "tdesign:typography",
	});
}

export default Component;
