import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t6y-3unio.css';
import '../../css/d/dj5pntbty.css';
import '../../css/d/diuz99pei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="t6y-3unio wm-shadow"/><path class="dj5pntbty wm-shadow"/><path class="diuz99pei"/></g>`,
		"fallback": "withicons-brutal:signature",
	});
}

export default Component;
