import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6p5ah1gu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6p5ah1gu"/>`,
		"fallback": "fa-regular:list-alt",
	});
}

export default Component;
