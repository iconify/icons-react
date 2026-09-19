import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5a9ri5nz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5a9ri5nz"/>`,
		"fallback": "game-icons:shiny-apple",
	});
}

export default Component;
