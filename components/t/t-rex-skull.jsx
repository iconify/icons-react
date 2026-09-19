import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is9u0rkgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is9u0rkgd"/>`,
		"fallback": "game-icons:t-rex-skull",
	});
}

export default Component;
