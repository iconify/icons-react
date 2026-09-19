import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wry-t2b-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wry-t2b-s"/>`,
		"fallback": "game-icons:robin-hood-hat",
	});
}

export default Component;
