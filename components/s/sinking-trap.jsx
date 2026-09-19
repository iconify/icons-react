import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuogg0oyi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuogg0oyi"/>`,
		"fallback": "game-icons:sinking-trap",
	});
}

export default Component;
