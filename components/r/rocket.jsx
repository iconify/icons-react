import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv29rccow.css';
import '../../css/y/yz7t0mb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer iv29rccow"/><path class="duoicon-primary-layer yz7t0mb_u"/>`,
		"fallback": "duo-icons:rocket",
	});
}

export default Component;
