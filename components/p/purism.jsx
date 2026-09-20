import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-j7yhbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-j7yhbav"/>`,
		"fallback": "thesvg-color:purism",
	});
}

export default Component;
