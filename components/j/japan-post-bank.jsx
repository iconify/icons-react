import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyd1jjbgm.css';

const viewBox = {"width":1548,"height":1087};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyd1jjbgm"/>`,
		"fallback": "thesvg-color:japan-post-bank",
	});
}

export default Component;
