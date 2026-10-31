import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y_quf75fd.css';
import '../../css/i/iz2ssg40l.css';
import '../../css/j/j-n8u1bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y_quf75fd"/><path class="iz2ssg40l wm-shadow"/><path class="j-n8u1bal"/></g>`,
		"fallback": "withicons-brutal:language",
	});
}

export default Component;
