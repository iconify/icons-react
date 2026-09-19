import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nskhr0b0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nskhr0b0f"/>`,
		"fallback": "game-icons:needle-jaws",
	});
}

export default Component;
