import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf6zrjvvl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf6zrjvvl"/>`,
		"fallback": "game-icons:lockpicks",
	});
}

export default Component;
