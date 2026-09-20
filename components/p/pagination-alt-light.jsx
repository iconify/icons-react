import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxh-jdb5w.css';
import '../../css/v/vi04yvb6a.css';
import '../../css/q/q5f0cebxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxh-jdb5w"/><path class="vi04yvb6a"/><path class="q5f0cebxt"/></g>`,
		"fallback": "stash:pagination-alt-light",
	});
}

export default Component;
