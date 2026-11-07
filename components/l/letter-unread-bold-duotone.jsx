import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjzke8b7e.css';
import '../../css/c/cx6-9bwoj.css';
import '../../css/x/xapju6bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjzke8b7e"/><path class="cx6-9bwoj"/><path class="xapju6bju"/>`,
		"fallback": "solar:letter-unread-bold-duotone",
	});
}

export default Component;
