import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3ct_9bhw.css';

const viewBox = {"width":1056,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1408) scale(1 -1)"><path class="t3ct_9bhw"/></g>`,
		"fallback": "fa:level-down",
	});
}

export default Component;
