import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxz55uslf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxz55uslf"/>`,
		"fallback": "selfhst:qbittorrent-light",
	});
}

export default Component;
