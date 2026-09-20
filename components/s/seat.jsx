import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa85g3b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa85g3b0z"/>`,
		"fallback": "thesvg-color:seat",
	});
}

export default Component;
