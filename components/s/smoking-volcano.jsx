import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f11ni23_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f11ni23_d"/>`,
		"fallback": "game-icons:smoking-volcano",
	});
}

export default Component;
