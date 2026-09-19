import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oia5jetrl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oia5jetrl"/>`,
		"fallback": "game-icons:sharp-shuriken",
	});
}

export default Component;
