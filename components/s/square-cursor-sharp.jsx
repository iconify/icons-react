import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-des9g1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-des9g1v"/>`,
		"fallback": "pixelarticons:square-cursor-sharp",
	});
}

export default Component;
