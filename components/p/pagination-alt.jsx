import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxh-jdb5w.css';
import '../../css/v/vi04yvb6a.css';
import '../../css/d/d-u2_-1yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxh-jdb5w"/><path class="vi04yvb6a"/><path class="d-u2_-1yy"/></g>`,
		"fallback": "stash:pagination-alt",
	});
}

export default Component;
