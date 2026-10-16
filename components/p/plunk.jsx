import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6mpagzxe.css';

const viewBox = {"width":1080,"height":1080};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6mpagzxe"/>`,
		"fallback": "thesvg-color:plunk",
	});
}

export default Component;
