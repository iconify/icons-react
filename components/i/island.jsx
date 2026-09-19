import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo_1buw-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo_1buw-f"/>`,
		"fallback": "game-icons:island",
	});
}

export default Component;
