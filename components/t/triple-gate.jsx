import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj3u6acix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj3u6acix"/>`,
		"fallback": "game-icons:triple-gate",
	});
}

export default Component;
