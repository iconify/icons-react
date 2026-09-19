import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es0g2ybga.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es0g2ybga"/>`,
		"fallback": "game-icons:umbrella",
	});
}

export default Component;
