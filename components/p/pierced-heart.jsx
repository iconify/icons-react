import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqoz3rbch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqoz3rbch"/>`,
		"fallback": "game-icons:pierced-heart",
	});
}

export default Component;
