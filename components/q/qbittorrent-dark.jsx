import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otypypb0y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otypypb0y"/>`,
		"fallback": "selfhst:qbittorrent-dark",
	});
}

export default Component;
