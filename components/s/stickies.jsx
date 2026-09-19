import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpcu2565j.css';
import '../../css/r/rs94qeblu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpcu2565j"/><path class="rs94qeblu"/>`,
		"fallback": "carbon:stickies",
	});
}

export default Component;
