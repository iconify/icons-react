import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqnu7xbid.css';
import '../../css/f/fw-cofgvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqnu7xbid"/><path class="fw-cofgvd"/>`,
		"fallback": "boxicons:pacman",
	});
}

export default Component;
