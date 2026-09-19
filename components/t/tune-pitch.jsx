import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tava8bboo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tava8bboo"/>`,
		"fallback": "game-icons:tune-pitch",
	});
}

export default Component;
