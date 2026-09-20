import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_baz6b3x.css';
import '../../css/t/tyxy_pbkb.css';
import '../../css/w/wuwwynbpg.css';
import '../../css/n/n5fjpab4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b_baz6b3x"/><path class="tyxy_pbkb"/><path class="wuwwynbpg"/><path class="n5fjpab4o"/></g>`,
		"fallback": "solar:notification-unread-lines-bold-duotone",
	});
}

export default Component;
