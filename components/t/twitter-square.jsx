import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plpzo5o4s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plpzo5o4s"/>`,
		"fallback": "fa6-brands:twitter-square",
	});
}

export default Component;
