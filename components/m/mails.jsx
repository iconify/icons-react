import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ukdpmtbhl.css';
import '../../css/p/p-gxi9bkc.css';
import '../../css/n/ntl4se4mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ukdpmtbhl"/><path class="p-gxi9bkc"/><path class="ntl4se4mo"/></g>`,
		"fallback": "iconaut:mails",
	});
}

export default Component;
