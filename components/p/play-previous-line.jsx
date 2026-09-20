import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei8_h1b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei8_h1b7h"/>`,
		"fallback": "si:play-previous-line",
	});
}

export default Component;
