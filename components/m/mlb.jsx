import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izg9xkbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izg9xkbvb"/>`,
		"fallback": "thesvg-color:mlb",
	});
}

export default Component;
