import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjkn40but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjkn40but"/>`,
		"fallback": "noviair:megaphone-check",
	});
}

export default Component;
