import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm_heiskl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm_heiskl"/>`,
		"fallback": "game-icons:skull-crack",
	});
}

export default Component;
