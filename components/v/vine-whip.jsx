import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjblog4ea.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjblog4ea"/>`,
		"fallback": "game-icons:vine-whip",
	});
}

export default Component;
