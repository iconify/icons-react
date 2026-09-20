import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkpslib-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkpslib-l"/>`,
		"fallback": "pixelarticons:text-start-a",
	});
}

export default Component;
