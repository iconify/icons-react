import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d_g7e1b3d.css';
import '../../css/p/pecauxbpe.css';
import '../../css/s/sqb5q3b4q.css';
import '../../css/x/xaw3eib5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d_g7e1b3d wm-shadow"/><path class="pecauxbpe wm-shadow"/><path class="sqb5q3b4q"/><path class="xaw3eib5l"/></g>`,
		"fallback": "withicons-brutal:scan-text",
	});
}

export default Component;
