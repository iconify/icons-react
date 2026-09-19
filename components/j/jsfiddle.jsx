import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rotb33b9k.css';

const viewBox = {"width":35,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rotb33b9k"/>`,
		"fallback": "fontisto:jsfiddle",
	});
}

export default Component;
