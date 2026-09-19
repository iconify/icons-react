import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju6x--box.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju6x--box"/>`,
		"fallback": "game-icons:portal",
	});
}

export default Component;
