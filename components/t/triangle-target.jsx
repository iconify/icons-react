import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anza8ob-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anza8ob-e"/>`,
		"fallback": "game-icons:triangle-target",
	});
}

export default Component;
