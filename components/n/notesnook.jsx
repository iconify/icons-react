import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u341z2y3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u341z2y3s"/>`,
		"fallback": "thesvg-color:notesnook",
	});
}

export default Component;
