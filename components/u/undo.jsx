import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u9m_db16v.css';
import '../../css/b/bf9droqgc.css';
import '../../css/j/jgl6hvb3b.css';
import '../../css/c/cx5wbybid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u9m_db16v wm-shadow"/><path class="bf9droqgc wm-shadow"/><path class="jgl6hvb3b"/><path class="cx5wbybid"/></g>`,
		"fallback": "withicons-brutal:undo",
	});
}

export default Component;
