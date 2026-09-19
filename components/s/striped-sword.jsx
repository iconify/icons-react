import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id1pz4b3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id1pz4b3u"/>`,
		"fallback": "game-icons:striped-sword",
	});
}

export default Component;
