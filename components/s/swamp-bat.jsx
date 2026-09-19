import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz0f1ls1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz0f1ls1d"/>`,
		"fallback": "game-icons:swamp-bat",
	});
}

export default Component;
