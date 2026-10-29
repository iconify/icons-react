import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/du1ladt-i.css';
import '../../css/y/ytib5qr7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="du1ladt-i"/><path class="wm-a ytib5qr7u"/></g>`,
		"fallback": "withicons:messages-solid",
	});
}

export default Component;
